import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import LoadingScreen from './LoadingScreen';
import ScoreDisplay from './ScoreDisplay';
import Gameboard from './Gameboard';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: rgb(238, 238, 238);
`;

function generatePokemonIds() {
  const pokemonIds = new Set();

  while (pokemonIds.size < 12) {
    pokemonIds.add(Math.floor(Math.random() * 151 + 1));
  }

  return pokemonIds;
}

function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokedex = new Pokedex();
      const pokemonIds = Array.from(generatePokemonIds());
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

    for (let i = cardsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
    }

    setCards(cardsCopy);
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
