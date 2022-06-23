import styled from 'styled-components';

const Card = styled.div`
  min-width: 150px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  padding: 5px;
  row-gap: 10px;
  border-radius: 15px;
`;

const PokemonImage = styled.img`
  width: 130px;
  height: 130px;
`;

const Name = styled.p`
  text-align: center;
  font-size: 20px;
`;

function GameCard() {
  return (
    <Card>
      <PokemonImage />
      <Name>Name</Name>
    </Card>
  );
}

export default GameCard;