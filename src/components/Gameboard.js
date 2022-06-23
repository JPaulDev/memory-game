import styled from 'styled-components';
import GameCard from './GameCard';

const StyledGameboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(3, 190px);
  gap: 30px;
`;

function Gameboard() {
  return (
    <StyledGameboard>
      <GameCard />
    </StyledGameboard>
  );
}

export default Gameboard;