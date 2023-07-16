import React, { useState } from 'react';
import { TabButton } from '../styles/styles';
import { styled } from 'styled-components';
import { FaTimes, FaCheck, FaMoneyBill } from 'react-icons/fa';
import useTaskcontext from '../hooks/useTaskContext';
import Task from './Task';

export default function Main() {
  const { tasks } = useTaskcontext();
  const [isActive, setIsActive] = useState('pending');

  return (
    <MainContainer>
      <SidebarContainer>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'pending'}
          onClick={() => setIsActive('pending')}
        >
          <FaTimes />
          Pending
        </SidebarButton>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'completed'}
          onClick={() => setIsActive('completed')}
        >
          <FaCheck />
          Completed
        </SidebarButton>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'pfp'}
          onClick={() => setIsActive('pfp')}
        >
          <FaMoneyBill />
          Pending for Fees
        </SidebarButton>
      </SidebarContainer>
      <div style={{ margin: '0 auto' }}>
        <TaskView>
          {tasks.map((task) => (
            <Task
              task={task}
              key={task._id}
            />
          ))}
        </TaskView>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 2rem;
  align-items: stretch;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1.5rem;
  @media (min-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const SidebarButton = styled(TabButton)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 1rem;
  background-color: ${(props) => props.selected && 'var(--hover)'};
  color: ${(props) => props.selected && 'var(--text)'};
`;

const TaskView = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  @media (min-width: 1370px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
`;
