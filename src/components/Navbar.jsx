import React from 'react';
import { styled } from 'styled-components';
import { PrimaryHeader } from '../styles/styles';
import useUser from '../hooks/useUser';

function Navbar() {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };
  return (
    <Nav>
      <NavBrand>TaskMate</NavBrand>
      <button onClick={handleLogout}>logout</button>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const NavBrand = styled(PrimaryHeader)`
  color: #3893fa;
  font-size: 3.5rem;
`;
