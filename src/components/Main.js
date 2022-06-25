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

  const handlePlayRound = (name) => {
    if (clickedCards.includes(name)) {
      setBestScore(currentScore > bestScore ? currentScore : bestScore);
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards, name]);
    }
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
