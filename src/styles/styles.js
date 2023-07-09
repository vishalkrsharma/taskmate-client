import { styled } from 'styled-components';

const PrimaryHeader = styled.div`
  font-size: 4rem;
`;

const SecondaryHeader = styled.div`
  font-size: 2.75rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #51a0fb;
  border-radius: 1rem;
`;

const Button = styled.button`
  background-color: #3893fa;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
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
  border: 2px solid #51a0fb;
  border-radius: 1rem;
  resize: none;
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid #51a0fb;
  border-radius: 1rem;
  background-color: #ffffff;
`;

const CloseButton = styled.button`
  background-color: transparent;
  aspect-ratio: 1;
`;

export { PrimaryHeader, SecondaryHeader, Input, Button, Form, TextArea, Select, CloseButton };
