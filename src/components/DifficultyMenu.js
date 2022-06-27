import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as MenuIcon } from '../img/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../img/close-icon.svg';

const OpenButton = styled.button`
  position: fixed;
  left: 8px;
  top: 8px;
  border: none;
  line-height: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const CloseButton = styled.button`
  border: none;
  line-height: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
  padding: 8px 15px 15px 8px;
  border-radius: 0 10px 10px 0;
  background-color: #737373;
  transition: transform 400ms ease-in-out;
  z-index: 20;
  transform: translate(${(props) => (props.open ? '0%' : '-100%')});
`;

const StyledIcon = styled.div`
  width: 25px;
  height: auto;
  fill: white;
`;

const Button = styled.button`
  width: 130px;
  height: 35px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => (props.highlight ? '2px solid white' : 'none')};
  background-color: #22c55e;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
`;

function DifficultyMenu({ difficulty, onChangeDifficulty }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <OpenButton onClick={() => setOpen(true)} title="Open menu">
        <StyledIcon as={MenuIcon} />
      </OpenButton>
      <Menu open={open}>
        <CloseButton onClick={() => setOpen(false)} title="Close menu">
          <StyledIcon as={CloseIcon} />
        </CloseButton>
        <Button
          highlight={difficulty === 12}
          onClick={() => onChangeDifficulty('easy')}
        >
          Easy
        </Button>
        <Button
          highlight={difficulty === 15}
          onClick={() => onChangeDifficulty('medium')}
        >
          Medium
        </Button>
        <Button
          highlight={difficulty === 18}
          onClick={() => onChangeDifficulty('hard')}
        >
          Hard
        </Button>
        <Button
          highlight={difficulty === 21}
          onClick={() => onChangeDifficulty('legendary')}
        >
          Legendary
        </Button>
      </Menu>
    </>
  );
}

export default DifficultyMenu;
