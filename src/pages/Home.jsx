import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TasksTable from '../components/TasksTable';
import useTask from '../hooks/useTask';
import useUserContext from '../hooks/useUserContext';
import useTaskcontext from '../hooks/useTaskContext';

function Home() {
  const { getTasks } = useTask();
  const { user } = useUserContext();
  const { tasks, setTasks } = useTaskcontext();
  useEffect(() => {
    async function getTs() {
      await getTasks();
    }

    getTs();
  }, []);

  return (
    <>
      <Navbar />
      <TaskForm />
      <TasksTable />
    </>
  );
}

export default Home;
