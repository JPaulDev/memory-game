import styled from 'styled-components';
import { ReactComponent as GithubLogo } from '../img/github-logo.svg';

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
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
`;

const StyledLogo = styled(GithubLogo)`
  width: 25px;
  cursor: pointer;
  transition: width 150ms ease-in-out;

  &:hover {
    width: 28px;
  }
`;

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

export default Footer;
