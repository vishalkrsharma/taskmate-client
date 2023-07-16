import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { PrimaryHeader, CloseButton, Logo } from '../styles/styles';
import useUser from '../hooks/useUser';
import { BiUser, BiLogOut } from 'react-icons/bi';
import Avatars from './Avatars';

function Navbar() {
  const { logout } = useUser();
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isOpen]);

  return (
    <Nav>
      <Logo>TaskMate</Logo>
      <AvatarButton
        onClick={() => setIsOpen(!isOpen)}
        ref={menuRef}
      >
        <Avatars />
        {isOpen && (
          <Menu>
            <MenuButton>
              <BiUser />
              User Settings
            </MenuButton>
            <MenuButton onClick={() => logout()}>
              <BiLogOut />
              Logout
            </MenuButton>
          </Menu>
        )}
      </AvatarButton>
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

const AvatarButton = styled.div`
  cursor: pointer;
  background-color: transparent;
  position: relative;
`;

const Menu = styled.div`
  width: 25rem;
  position: absolute;
  top: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background);
  right: 0;
  padding: 1rem;
  border-radius: 1rem;
  /* box-shadow: 2.5px 5px 5px hsl(0deg 0% 0% / 0.42); */
  box-shadow: 0px 0px 2px 1px black;
`;

const MenuButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  font-size: 1.75rem;
  text-align: left;
  background-color: transparent;
  color: var(--text);
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: var(--hover);
  }
`;
