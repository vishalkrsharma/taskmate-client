import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { LoginRegisterContainer, Logo, TabButton, ButtonContainer, TabContainer } from '../styles/styles';

export default function LoginOrRegister() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <LoginRegisterContainer>
      <Logo style={{ marginTop: '15rem' }}>TaskMate</Logo>
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
        {activeTab === 'login' && <Login setActiveTab={setActiveTab} />}
        {activeTab === 'register' && <Register setActiveTab={setActiveTab} />}
      </TabContainer>
    </LoginRegisterContainer>
  );
}
