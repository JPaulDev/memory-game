import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import ScoreDisplay from './ScoreDisplay';
import Gameboard from './Gameboard';
import LoadingScreen from './LoadingScreen';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: rgb(238, 238, 238);
`;

function generateIds() {
  const pokemonIds = new Set();

  while (pokemonIds.size < 12) {
    pokemonIds.add(Math.floor(Math.random() * 151 + 1));
  }

  return pokemonIds;
}

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

function Main() {
  const [cards, setCards] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokedex = new Pokedex();
      const pokemonIds = Array.from(generateIds());
      const promises = pokemonIds.map((id) => pokedex.getPokemonByName(id));
      const pokemon = await Promise.all(promises);

      setTimeout(() => {
        setCards(pokemon);
      }, 2000);
    };

    fetchPokemon();
  }, []);

  const handleShuffleCards = () => {
    const cardsCopy = [...cards];
    const shuffledCards = shuffleCards(cardsCopy);

    setCards(shuffledCards);
  };

  const handlePlayRound = (name) => {
    if (clickedCards.includes(name)) {
      setBestScore(currentScore > bestScore ? currentScore : bestScore);
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards, name]);
    }

    handleShuffleCards();
  };

  return (
    <StyledMain>
      {cards ? (
        <>
          <ScoreDisplay currentScore={currentScore} bestScore={bestScore} />
          <Gameboard cards={cards} onPlayRound={handlePlayRound} />
        </>
      ) : (
        <LoadingScreen />
      )}
    </StyledMain>
  );
}

export default Main;
