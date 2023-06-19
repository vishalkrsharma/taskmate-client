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

const Promt = styled.div`
  font-size: 1.5rem;
`;

const PromtLink = styled(Link)`
  color: #51a0fb;
  text-decoration: underline;
`;

export { FormContainer, Form, Promt, PromtLink };
