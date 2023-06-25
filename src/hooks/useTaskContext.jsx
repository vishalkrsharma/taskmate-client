import { TaskContext } from '../contexts/TaskContext';
import { useContext } from 'react';

export default function useTaskcontext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw Error('error');
  }
  return context;
}
