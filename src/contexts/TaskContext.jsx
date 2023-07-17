import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext([]);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>;
};
