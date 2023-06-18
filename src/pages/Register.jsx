import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import { PrimaryHeader, SecondaryHeader } from '../styles/styles';
import { Form, FormButton, FormContainer, Input, Promt, PromtLink } from '../styles/FormStyles';

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
    <FormContainer>
      <PrimaryHeader>TaskMate</PrimaryHeader>
      <SecondaryHeader>Register</SecondaryHeader>
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
        <FormButton onClick={handleSubmit}>Register</FormButton>
      </Form>
      <Promt>
        Already have an account?&nbsp;
        <PromtLink to='/login'>Login</PromtLink>
      </Promt>
    </FormContainer>
  );
}

export default Register;
