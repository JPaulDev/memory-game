import styled from 'styled-components';

const LoadingText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Pokeball = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 100%;
  border: 2px solid black;
  background: linear-gradient(
    to bottom,
    red 48%,
    black 48%,
    black 52%,
    white 52%
  );
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const OuterCircle = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 100%;
`;

const InnerCircle = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid black;
  border-radius: 100%;
`;

function LoadingScreen() {
  return (
    <>
      <LoadingText>Catching Pokémon</LoadingText>
      <Pokeball>
        <OuterCircle>
          <InnerCircle />
        </OuterCircle>
      </Pokeball>
    </>
  );
}

export default LoadingScreen;
