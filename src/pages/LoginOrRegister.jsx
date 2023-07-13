import React, { Fragment, useMemo, useState } from 'react';
import Login from './Login';
import Register from './Register';
import { LoginRegisterContainer, Logo, PrimaryHeader, TabButton, ButtonContainer, TabContainer, TabForm } from '../styles/styles';

export default function LoginOrRegister() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <LoginRegisterContainer>
      <Logo>
        <PrimaryHeader>TaskMate</PrimaryHeader>
      </Logo>
      <TabContainer>
        <ButtonContainer>
          <TabButton
            selected={activeTab === 'login'}
            onClick={() => setActiveTab('login')}
          >
            Log In
          </TabButton>
          <TabButton
            selected={activeTab === 'register'}
            onClick={() => setActiveTab('register')}
          >
            Register
          </TabButton>
        </ButtonContainer>
        <TabForm>
          {activeTab === 'login' && <Login setActiveTab={setActiveTab} />}
          {activeTab === 'register' && <Register setActiveTab={setActiveTab} />}
        </TabForm>
      </TabContainer>
    </LoginRegisterContainer>
  );
}
