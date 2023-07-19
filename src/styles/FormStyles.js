import { styled } from 'styled-components';
import { Button } from './styles';

const FormContainer = styled.div`
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

const PromtLink = styled.button`
  color: var(--algae);
  font-weight: 600;
  background-color: transparent;
  text-decoration: underline;
`;

const FormElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
`;

const UserSettingsForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  &:not(&:last-child) {
    margin-bottom: 1rem;
  }
`;

const UserSettingsButton = styled(Button)`
  font-size: 1.75rem;
`;

const FormLabel = styled.label`
  font-size: 1.75rem;
`;

const EditFormElement = styled(FormElement)`
  flex-direction: column;
`;

export { FormContainer, Form, Promt, PromtLink, FormElement, FormLabel, UserSettingsForm, UserSettingsButton, EditFormElement };
