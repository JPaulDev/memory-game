import styled from 'styled-components';

const Card = styled.div`
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  row-gap: 5px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
`;

const Name = styled.p`
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: 400;
`;

function GameCard({ name, sprite, onPlayRound }) {
  return (
    <Card onClick={() => onPlayRound(name)}>
      <Image src={sprite} alt={name} />
      <Name>{name}</Name>
    </Card>
  );
}

export default GameCard;
