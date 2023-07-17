import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import useTask from '../hooks/useTask';
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
      <Main />
      <TaskForm />
    </>
  );
}
