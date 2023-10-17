import { styled } from 'styled-components';

const NewTaskButton = styled.button`
  cursor: pointer;
  font-size: 1.75rem;
  font-weight: 600;
  background-image: linear-gradient(to right, var(--primary), var(--accent));
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

export { NewTaskButton };
