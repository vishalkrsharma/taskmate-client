import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '../styles/styles';
import useUser from '../hooks/useUser';
import { BiUser, BiLogOut } from 'react-icons/bi';
import Avatars from './Avatars';
import { AvatarButton, Menu, Nav } from '../styles/NavbarStyles';

export default function Navbar() {
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
