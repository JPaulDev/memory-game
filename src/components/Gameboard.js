import styled from 'styled-components';
import { Fragment } from 'react';
import GameCard from './GameCard';

const StyledGameboard = styled.div`
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function Gameboard({ cards, onPlayRound }) {
  const maxWidth = (cards.length / 3) * 150;

  return (
    <StyledGameboard maxWidth={`${maxWidth}px`}>
      {cards.map((card) => (
        <Fragment key={card.id}>
          <GameCard
            name={card.name}
            sprite={card.sprites.front_default}
            onPlayRound={onPlayRound}
          />
        </Fragment>
      ))}
    </StyledGameboard>
  );
}

export default Gameboard;
