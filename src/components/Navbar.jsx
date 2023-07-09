import React from 'react';
import { styled } from 'styled-components';
import { PrimaryHeader, CloseButton } from '../styles/styles';
import useUser from '../hooks/useUser';
import { BiLogOut } from 'react-icons/bi';

function Navbar() {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };
  return (
    <Nav>
      <NavBrand>TaskMate</NavBrand>
      <CloseButton onClick={handleLogout}>
        <BiLogOut size={25} />
      </CloseButton>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const NavBrand = styled(PrimaryHeader)`
  color: #3893fa;
  font-size: 3.5rem;
  letter-spacing: 0.75rem;
`;
