import React, { useEffect, useState } from 'react';
import { SidebarButtonLabel, TabButton } from '../styles/styles';
import { styled } from 'styled-components';
import { FaTasks, FaTimes, FaCheck, FaMoneyBill } from 'react-icons/fa';
import useTaskcontext from '../hooks/useTaskContext';
import Task from './Task';

export default function Main() {
  const { tasks } = useTaskcontext();
  const [isActive, setIsActive] = useState('All');
  const [showTasks, setShowTasks] = useState(tasks || []);

  useEffect(() => {
    if (isActive === 'All') setShowTasks(tasks || []);
    else if (isActive === 'Pending') filter();
    else if (isActive === 'Completed') filter();
    else if (isActive === 'Pending for fees') filter();
  }, [tasks, isActive]);

  const filter = () => {
    let tsks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].status === isActive) {
        tsks.push(tasks[i]);
      }
    }
    setShowTasks(tsks);
  };

  return (
    <MainContainer>
      <SidebarContainer>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'All'}
          onClick={() => setIsActive('All')}
        >
          <FaTasks />
          <SidebarButtonLabel>All</SidebarButtonLabel>
        </SidebarButton>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'Pending'}
          onClick={() => setIsActive('Pending')}
        >
          <FaTimes />
          <SidebarButtonLabel>Pending</SidebarButtonLabel>
        </SidebarButton>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'Pending for fees'}
          onClick={() => setIsActive('Pending for fees')}
        >
          <FaMoneyBill />
          <SidebarButtonLabel>Pending for Fees</SidebarButtonLabel>
        </SidebarButton>
        <SidebarButton
          style={{ width: '22rem', fontSize: '1.75rem' }}
          selected={isActive === 'Completed'}
          onClick={() => setIsActive('Completed')}
        >
          <FaCheck />
          <SidebarButtonLabel>Completed</SidebarButtonLabel>
        </SidebarButton>
      </SidebarContainer>
      <div style={{ margin: '0 auto' }}>
        <TaskView>
          {showTasks.length !== 0 &&
            showTasks.map((task) => (
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
  @media (max-width: 820px) {
    justify-content: center;
    height: 4rem;
    padding-left: 0;
  }
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
