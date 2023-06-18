import React from 'react';
import useUser from '../hooks/useUser';

function Home() {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      Home
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default Home;
