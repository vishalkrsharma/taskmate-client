import { styled } from 'styled-components';

const TaskContainer = styled.div`
  font-size: 1.75rem;
  border: 2px solid var(--accent);
  padding: 1rem;
  border-radius: 1rem;
  width: 35rem;
  overflow-x: hidden;
`;

const TaskButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export { TaskContainer, TaskButtonContainer };
