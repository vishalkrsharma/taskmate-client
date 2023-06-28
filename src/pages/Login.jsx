import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import { Form, FormContainer, Promt, PromtLink } from '../styles/FormStyles';
import { Input, PrimaryHeader, SecondaryHeader, Button } from '../styles/styles';

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
    <FormContainer>
      <PrimaryHeader>TaskMate</PrimaryHeader>
      <SecondaryHeader>Login</SecondaryHeader>
      <Form>
        <Input
          type='text'
          placeholder='Username'
          name='username'
          value={userInfo.username}
          onChange={handleChange}
        />

        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={userInfo.password}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Login</Button>
      </Form>
      <Promt>
        Don't have an account? &nbsp;<PromtLink to='/register'>Register</PromtLink>
      </Promt>
    </FormContainer>
  );
}

export default Login;
