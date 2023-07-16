import React from 'react';
import { styled } from 'styled-components';
import { BiTrash, BiPencil } from 'react-icons/bi';
import useTask from '../hooks/useTask';
import useTaskContext from '../hooks/useTaskContext';
import EditForm from './Task';
import Task from './Task';

function TasksTable() {
  const { tasks } = useTaskContext();

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Category</th>
            <th>ClientName</th>
            <th>Job</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, idx) => (
              <Task
                task={task}
                idx={idx}
                key={idx}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default TasksTable;

const Table = styled.table`
  width: calc(100vw - 4rem);
  font-size: 1.5rem;
  border: 1px solid black;
  border-collapse: collapse;
`;
