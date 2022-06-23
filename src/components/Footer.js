import styled from 'styled-components';
import { ReactComponent as GithubLogo } from '../img/github-logo.svg';

function Footer() {
  return (
    <StyledFooter>
      <p>Built by JPaulDev</p>
      <Link href="https://github.com/JPaulDev/memory-game">
        <StyledLogo />
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f46;
  column-gap: 4px;
  color: white;
  padding: 5px;
`;

const Link = styled.a`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
`;

const StyledLogo = styled(GithubLogo)`
  width: 25px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    width: 28px;
  }
`;

export default Footer;
