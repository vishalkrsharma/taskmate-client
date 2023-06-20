import React from 'react';
import { styled } from 'styled-components';

function TasksTable({ tasks }) {
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
          const { category, clientName, job, startDate, endDate, status, remarks } = task;
          return (
            <tr key={idx}>
              <td style={{ textAlign: 'right' }}>{idx}</td>
              <td>{category}</td>
              <td>{clientName}</td>
              <td>{job}</td>
              <td>{startDate.substring(0, startDate.indexOf('T'))}</td>
              <td>{endDate.substring(0, endDate.indexOf('T'))}</td>
              <td>{status}</td>
              <td>{remarks}</td>
              <td></td>
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
