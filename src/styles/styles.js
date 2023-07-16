import { styled } from 'styled-components';

const LoginRegisterContainer = styled.div`
  height: 100vh;
  margin-top: 10rem;
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
  &:focus {
    border: 2px solid var(--algae);
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
  &:hover {
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
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid var(--tiber);
  border-radius: 1rem;
  resize: none;
  background-color: var(--hover);
  color: var(--text);
  &:focus {
    border: 2px solid var(--algae);
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid var(--tiber);
  border-radius: 1rem;
  background-color: var(--hover);
  color: var(--text);
  &:focus {
    border: 2px solid var(--algae);
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  aspect-ratio: 1;
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
};
