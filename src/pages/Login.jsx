import axios from 'axios';
import React, { useState } from 'react';
import useUser from '../hooks/useUser';

function Login() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const { login } = useUser();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(userInfo);
  };

  return (
    <>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          name='username'
          value={userInfo.username}
          onChange={handleChange}
        />

        <input
          type='password'
          placeholder='password'
          name='password'
          value={userInfo.password}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Login'
        />
      </form>
    </>
  );
}

export default Login;
