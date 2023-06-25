import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TasksTable from '../components/TasksTable';

function Home() {
  return (
    <>
      <Navbar />
      <TaskForm />
      <TasksTable />
    </>
  );
}

export default Home;
