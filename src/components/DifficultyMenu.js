import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as MenuIcon } from '../img/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../img/close-icon.svg';

const OpenButton = styled.button`
  position: absolute;
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

const StyledIcon = styled.div`
  width: 25px;
  height: auto;
  fill: white;

  &:hover {
    fill: #e5e5e5;
  }
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
  padding: 8px 15px 15px 8px;
  border-radius: 0 10px 10px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
  background-color: #737373;
  z-index: 20;
  transition: transform 400ms ease-in-out;
  transform: translate(${(props) => (props.open ? '0%' : '-110%')});
`;

const Button = styled.button`
  min-width: 130px;
  min-height: 35px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #22c55e;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.4) 0px 1px 5px 0px;
  border: ${(props) => (props.highlight ? '2px solid white' : 'none')};
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #16a34a;
  }
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
