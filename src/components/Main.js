import styled from 'styled-components';
import ScoreDisplay from './ScoreDisplay';
import Gameboard from './Gameboard';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  return (
    <StyledMain>
      <ScoreDisplay />
      <Gameboard />
    </StyledMain>
  );
}

export default Main;
