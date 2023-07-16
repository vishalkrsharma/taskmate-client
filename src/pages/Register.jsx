import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import { Input, Button } from '../styles/styles';
import { Form, FormContainer, Promt, PromtLink } from '../styles/FormStyles';

function Register({ setActiveTab }) {
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
    <FormContainer>
      <Form>
        <Input
          type='text'
          placeholder='Username'
          name='username'
          value={userInfo.username}
          onChange={handleChange}
        />
        <Input
          text='email'
          placeholder='Email'
          name='email'
          value={userInfo.email}
          onChange={handleChange}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={userInfo.password}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Register</Button>
      </Form>
      <Promt>
        Already have an account?&nbsp;
        <PromtLink onClick={() => setActiveTab('login')}>Login</PromtLink>
      </Promt>
    </FormContainer>
  );
}

export default Register;
