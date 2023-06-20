import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import useTask from '../hooks/useTask';
import TasksTable from '../components/TasksTable';
function Home() {
  const [tasks, setTasks] = useState([]);
  const { getTasks } = useTask();

  useEffect(() => {
    async function getTs() {
      const ts = await getTasks();
      setTasks(ts);
    }
    getTs();
  }, []);

  return (
    <>
      <Navbar />
      <TaskForm />
      <TasksTable tasks={tasks} />
    </>
  );
}

export default Home;
