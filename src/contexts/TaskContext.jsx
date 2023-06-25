import { createContext, useEffect, useState } from 'react';
import useTask from '../hooks/useTask';

export const TaskContext = createContext([]);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { getTasks } = useTask();

  useEffect(() => {
    async function getTs() {
      const ts = await getTasks();
      setTasks(ts);
      localStorage.setItem('user', JSON.stringify(tasks));
    }
    getTs();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>;
};
