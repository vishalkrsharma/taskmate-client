import axios from 'axios';
import useUserContext from './useUserContext';

function useTask() {
  const { user } = useUserContext();
  const newTask = async (taskInfo) => {
    try {
      const res = await axios.post('/api/task/newtask', { taskInfo, userId: user.user._id });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return { newTask };
}

export default useTask;
