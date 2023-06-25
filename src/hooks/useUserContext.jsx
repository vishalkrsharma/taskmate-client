import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

export default function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw Error('error');
  }
  return context;
}
