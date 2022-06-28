import styled from 'styled-components';
import bannerImage from '../img/header-banner.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(239, 14, 50);
  padding: 20px;
  user-select: none;
`;

const Image = styled.img`
  width: min(550px, 90%);
  height: auto;
`;

const CircleContainer = styled.div`
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f46;
  z-index: 10;
`;

const OuterCircle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 6px solid #3f3f46;
  border-radius: 100%;
`;

const InnerCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border: 4px solid #3f3f46;
  border-radius: 100%;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Image src={bannerImage} alt="Pokemon memory banner" />
      </StyledHeader>
      <CircleContainer>
        <OuterCircle>
          <InnerCircle />
        </OuterCircle>
      </CircleContainer>
    </>
  );
}

export default Header;
