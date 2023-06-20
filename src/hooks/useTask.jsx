import axios from 'axios';
import useUserContext from './useUserContext';

function useTask() {
  const { user } = useUserContext();

  const getTasks = async () => {
    try {
      const res = await axios.post('/api/task/gettasks', { userId: user.user._id });
      const { tasks } = res.data;
      return tasks;
    } catch (err) {
      console.log(err);
    }
  };

  const newTask = async (taskInfo) => {
    try {
      const res = await axios.post('/api/task/newtask', { taskInfo, userId: user.user._id });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return { newTask, getTasks };
}

export default useTask;
