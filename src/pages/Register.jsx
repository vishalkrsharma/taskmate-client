import React, { useState } from 'react';
import useUser from '../hooks/useUser';

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { register } = useUser();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    register(userInfo);
  };

  return (
    <>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          name='username'
          value={userInfo.username}
          onChange={handleChange}
        />
        <input
          text='email'
          placeholder='email'
          name='email'
          value={userInfo.email}
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
          value='Register'
        />
      </form>
    </>
  );
}

export default Register;
