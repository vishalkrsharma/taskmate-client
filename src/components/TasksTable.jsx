import React from 'react';
import { styled } from 'styled-components';
import { BiTrash, BiPencil } from 'react-icons/bi';
import useTask from '../hooks/useTask';

function TasksTable({ tasks }) {
  const { editTask, deleteTask } = useTask();

  const editTsk = (_id) => {
    editTask(_id);
  };
  const deleteTsk = (_id) => {
    deleteTask(_id);
  };

  return (
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
        {tasks.map((task, idx) => {
          const { _id, category, clientName, job, startDate, endDate, status, remarks } = task;
          return (
            <tr key={idx}>
              <td style={{ textAlign: 'right' }}>{idx + 1}</td>
              <td>{category}</td>
              <td>{clientName}</td>
              <td>{job}</td>
              <td>{startDate.substring(0, startDate.indexOf('T'))}</td>
              <td>{endDate.substring(0, endDate.indexOf('T'))}</td>
              <td>{status}</td>
              <td>{remarks}</td>
              <OperationsTd>
                {/* <BiPencil />
                <BiTrash /> */}
                <button onClick={() => editTsk(_id)}>Edit</button>
                <button onClick={() => deleteTsk(_id)}>Delete</button>
              </OperationsTd>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TasksTable;

const Table = styled.table`
  margin: 2rem;
  width: calc(100vw - 4rem);
  font-size: 1.5rem;
  border: 1px solid black;
  border-collapse: collapse;
`;

const OperationsTd = styled.td`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  height: 100%;
`;
