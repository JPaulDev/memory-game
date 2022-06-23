import styled from 'styled-components';

const ScoreContainer = styled.div`
  display: flex;
  column-gap: 130px;
`;

const CurrentScore = styled.div`
  background-color: rgb(255, 181, 181);
  text-align: center;
  min-width: 240px;
  min-height: 40px;
  border-radius: 50px;
`;

const BestScore = styled(CurrentScore)`
  background-color: rgb(181, 255, 181);
`;

function ScoreDisplay({ currentScore, bestScore }) {
  return (
    <ScoreContainer>
      <CurrentScore>Current Score: {currentScore}</CurrentScore>
      <BestScore>Best Score: {bestScore}</BestScore>
    </ScoreContainer>
  );
}

export default ScoreDisplay;
