import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  width: min(500px, 90%);
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 35px 30px;
`;

const Text = styled.p`
  font-size: 1.1rem;
`;

const Button = styled.button`
  width: min(250px, 90%);
  min-height: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #4ade80;
  border-radius: 5px;
  margin-top: 30px;
  border: none;
  user-select: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #22c55e;
    transform: scale(1.05);
  }
`;

function InstructionsModal({ onStartGame }) {
  return ReactDOM.createPortal(
    <Backdrop>
      <Modal>
        <Text>
          The goal of the game is to click every single card at least once, you
          will receive a point for each card you click. If you click the same
          card more than once, your score will be reset to zero. Adjust the
          difficulty in the menu found at the top left of the screen.
        </Text>
        <Button onClick={onStartGame}>Start Game</Button>
      </Modal>
    </Backdrop>,
    document.getElementById('modal')
  );
}

export default InstructionsModal;
