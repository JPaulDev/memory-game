import styled from 'styled-components';

const ScoreContainer = styled.div`
  display: flex;
  column-gap: 90px;
`;

const CurrentScore = styled.div`
  background-color: rgb(255, 181, 181);
  text-align: center;
  min-width: 240px;
  min-height: 40px;
  border-radius: 40px;
  margin-bottom: 35px;
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  line-height: 40px;
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
