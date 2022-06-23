import styled from 'styled-components';
import ScoreDisplay from './ScoreDisplay';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

function Main() {
  return (
    <StyledMain>
      <ScoreDisplay />
    </StyledMain>
  );
}

export default Main;
