import { styled } from 'styled-components';
import { FormElement } from './FormStyles';

const LoginRegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
`;

const PrimaryHeader = styled.div`
  font-size: 4rem;
  letter-spacing: 0.5rem;
`;

const Logo = styled(PrimaryHeader)`
  background-image: linear-gradient(to right, var(--primary), var(--accent));
  background-clip: text;
  color: transparent;
  font-weight: 600;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const TabButton = styled.button`
  width: 14rem;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.selected ? 'var(--primary)' : 'var(--background)')};
  color: ${(props) => (props.selected ? 'var(--background)' : 'var(--bright)')};
  &:hover {
    background-color: ${(props) => props.selected === false && 'var(--hover)'};
  }
`;

const SecondaryHeader = styled.div`
  font-size: 2.75rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid transparent;
  background-color: var(--hover);
  color: var(--text);
  border-radius: 1rem;
  transition: all 0.2s;
  &:focus {
    border: 2px solid var(--algae);
  }
  @media (max-width: 500px) {
    width: 30rem;
  }
`;

const Button = styled.button`
  background-color: var(--hover);
  width: 12.5rem;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  &:hover,
  &:active,
  &:focus {
    background-color: var(--primary);
    background-image: linear-gradient(to right, var(--primary), var(--accent));
    color: var(--background);
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  flex-direction: row;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const TextArea = styled.textarea`
  width: 50rem;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  resize: none;
  background-color: var(--hover);
  color: var(--text);
  transition: all 0.2s;
  &:focus {
    border: 2px solid var(--algae);
  }
  @media (max-width: 500px) {
    width: 30rem;
  }
  @media (max-width: 1100px) {
    width: 40rem;
  }
`;

const Select = styled.select`
  width: 50rem;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  background-color: var(--hover);
  color: var(--text);
  &:focus {
    border: 2px solid var(--algae);
  }
  @media (max-width: 500px) {
    width: 30rem;
  }
  @media (max-width: 1100px) {
    width: 40rem;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  aspect-ratio: 1;
`;

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--background)',
  },
};

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  margin-bottom: 1rem;
  margin-top: -1rem;
`;

const ModalButton = styled(Button)`
  font-size: 1.5rem;
  float: right;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const SidebarButtonLabel = styled.div`
  @media (max-width: 820px) {
    display: none;
  }
`;

export {
  LoginRegisterContainer,
  Logo,
  ButtonContainer,
  PrimaryHeader,
  TabContainer,
  SecondaryHeader,
  Input,
  Button,
  Form,
  TextArea,
  Select,
  CloseButton,
  TabButton,
  ModalStyles,
  ModalHeader,
  ModalButtonContainer,
  ModalButton,
  SidebarButtonLabel,
};
