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
`;

const Image = styled.img`
  width: 130px;
  height: auto;
`;

const Name = styled.p`
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: 400;
`;

function GameCard({ name, sprite }) {
  return (
    <Card>
      <Image src={sprite} alt={name} />
      <Name>{name}</Name>
    </Card>
  );
}

export default GameCard;
