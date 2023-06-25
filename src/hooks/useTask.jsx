import axios from 'axios';
import useUserContext from './useUserContext';

function useTask() {
  const { user } = useUserContext();

  const getTasks = async () => {
    try {
      const res = await axios.post('/api/task/gettasks', { user });
      const { tasks } = res.data;
      return tasks;
    } catch (err) {
      console.log(err);
    }
  };

  const newTask = async (taskInfo) => {
    try {
      const res = await axios.post('/api/task/newtask', { taskInfo, user });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (_id) => {
    try {
      const res = await axios.post('/api/task/edittask', { user, taskId: _id });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (_id) => {
    try {
      const res = await axios.post('/api/task/deletetask', { user, taskId: _id });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return { newTask, getTasks, editTask, deleteTask };
}

export default useTask;
