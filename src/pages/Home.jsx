import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TasksTable from '../components/TasksTable';
import useTask from '../hooks/useTask';
import useUserContext from '../hooks/useUserContext';

function Home() {
  const { getTasks } = useTask();
  const { user } = useUserContext();

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
