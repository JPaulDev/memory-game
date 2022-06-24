import styled from 'styled-components';
import { Fragment } from 'react';
import GameCard from './GameCard';

const StyledGameboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(3, max-content);
  gap: 30px;
`;

function Gameboard({ cards }) {
  return (
    <StyledGameboard>
      {cards.map((card) => (
        <Fragment key={card.id}>
          <GameCard name={card.name} sprite={card.sprites.front_default} />
        </Fragment>
      ))}
    </StyledGameboard>
  );
}

export default Gameboard;
