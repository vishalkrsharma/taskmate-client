import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserContextProvider } from './contexts/UserContext';
import { TaskContextProvider } from './contexts/TaskContext';
import GlobalStyle from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
        <GlobalStyle />
        <App />
      </TaskContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
