import axios from 'axios';
import useUserContext from './useUserContext';
import useTaskcontext from './useTaskContext';

function useTask() {
  const { user } = useUserContext();
  const { setTasks } = useTaskcontext();

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
      await axios.post('/api/task/edittask', { user, task: editedTask });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (_id) => {
    try {
      await axios.post('/api/task/deletetask', { user, taskId: _id });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return { newTask, getTasks, editTask, deleteTask };
}

export default useTask;
