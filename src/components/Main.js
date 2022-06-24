import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
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

function generateIds() {
  const pokemonIds = new Set();

  while (pokemonIds.size < 12) {
    pokemonIds.add(Math.floor(Math.random() * 151 + 1));
  }

  return pokemonIds;
}

function Main() {
  const [cards, setCards] = useState(null);

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

  return (
    <StyledMain>
      {cards ? (
        <>
          <ScoreDisplay />
          <Gameboard cards={cards} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </StyledMain>
  );
}

export default Main;
