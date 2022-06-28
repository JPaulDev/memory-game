import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import LoadingScreen from './LoadingScreen';
import DifficultyMenu from './DifficultyMenu';
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

function generatePokemonIds(number) {
  const pokemonIds = new Set();

  while (pokemonIds.size < number) {
    pokemonIds.add(Math.floor(Math.random() * 151 + 1));
  }

  return pokemonIds;
}

function Main() {
  const [difficulty, setDifficulty] = useState(12);
  const [loading, setLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);

  // Mock loading screen for decoration only
  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokedex = new Pokedex();
      const pokemonIds = Array.from(generatePokemonIds(difficulty));
      const promises = pokemonIds.map((id) => pokedex.getPokemonByName(id));
      const pokemon = await Promise.all(promises);

      handleLoading();
      setCards(pokemon);
    };

    fetchPokemon();
  }, [difficulty]);

  const handleChangeDifficulty = (setting) => {
    let numberOfCards = 0;

    if (setting === 'easy') {
      numberOfCards = 12;
    } else if (setting === 'medium') {
      numberOfCards = 15;
    } else if (setting === 'hard') {
      numberOfCards = 18;
    } else if (setting === 'legendary') {
      numberOfCards = 21;
    }

    if (numberOfCards !== difficulty) {
      handleLoading();
      setDifficulty(numberOfCards);
      setBestScore(0);
      setCurrentScore(0);
    }
  };

  const handleShuffleCards = () => {
    const cardsCopy = [...cards];

    // Fisher-Yates shuffle to randomize cards
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
      <DifficultyMenu
        difficulty={difficulty}
        onChangeDifficulty={handleChangeDifficulty}
      />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <ScoreDisplay currentScore={currentScore} bestScore={bestScore} />
          <Gameboard cards={cards} onPlayRound={handlePlayRound} />
        </>
      )}
    </StyledMain>
  );
}

export default Main;
