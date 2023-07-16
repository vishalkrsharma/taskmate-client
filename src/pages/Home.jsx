import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TasksTable from '../components/TasksTable';
import useTask from '../hooks/useTask';
import useUserContext from '../hooks/useUserContext';
import useTaskcontext from '../hooks/useTaskContext';
import TaskView from '../components/Main';
import Main from '../components/Main';

export default function Home() {
  const { getTasks } = useTask();
  useEffect(() => {
    async function getTs() {
      await getTasks();
    }
    getTs();
  }, []);

  return (
    <>
      <Navbar />
      {/* <div style={{ margin: '2rem', display: 'flex', alignItems: 'stretch', gap: '2rem' }}>
        <Sidebar />
        <TaskView />
        {/* <TasksTable /> 
      </div> */}
      <Main />
      <TaskForm />
    </>
  );
}
