import axios from 'axios';
import useUserContext from './useUserContext';
import useTaskcontext from './useTaskContext';

function useTask() {
  const { user } = useUserContext();
  const { tasks, setTasks } = useTaskcontext();

  const getTasks = async () => {
    try {
      const res = await axios.post('/api/task/gettasks', { user });
      const { tasks } = res.data;
      setTasks(tasks);
      return tasks;
    } catch (err) {
      console.log(err);
    }
  };

  const newTask = async (taskInfo) => {
    try {
      const res = await axios.post('/api/task/newtask', { taskInfo, user });
      const { data, status } = res;
      if (status === 201) {
        setTasks((prev) => [...prev, data.task]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (editedTask) => {
    try {
      const res = await axios.post('/api/task/edittask', { user, task: editedTask });
      // setTasks((prev) => {
      //   for (let i = 0; i < prev.length; i++) {
      //     if (prev[i]._id === editedTask._id) {
      //       prev[i] = editedTask;
      //     }
      //   }
      //   console.log(prev);
      //   return prev;
      // });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (_id) => {
    try {
      const res = await axios.post('/api/task/deletetask', { user, taskId: _id });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return { newTask, getTasks, editTask, deleteTask };
}

export default useTask;
