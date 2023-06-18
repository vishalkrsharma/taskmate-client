import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
  margin: 4rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #51a0fb;
  border-radius: 1rem;
`;

const FormButton = styled.button`
  background-color: #3893fa;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 1rem;
`;

const Promt = styled.div`
  font-size: 1.5rem;
`;

const PromtLink = styled(Link)`
  color: #51a0fb;
  text-decoration: underline;
`;

export { FormContainer, Form, Input, FormButton, Promt, PromtLink };
