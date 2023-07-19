import React, { useEffect, useRef, useState } from 'react';
import { Button, CloseButton, Form, Input, Logo, ModalHeader, SecondaryHeader } from '../styles/styles';
import useUser from '../hooks/useUser';
import { BiUser, BiLogOut } from 'react-icons/bi';
import Avatars from './Avatars';
import { AvatarButton, Menu, MenuButton, Nav } from '../styles/NavbarStyles';
import Modal from './Modal';
import { FaTimes } from 'react-icons/fa';
import { FormElement, FormLabel, UserSettingsButton, UserSettingsForm } from '../styles/FormStyles';

export default function Navbar() {
  const { logout } = useUser();
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

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

  useEffect(() => {
    if (modalIsOpen === false) {
      setNewUsername('');
      setNewEmail('');
      setNewPassword('');
    }
  }, [modalIsOpen]);

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
            <MenuButton onClick={() => setModalIsOpen(true)}>
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
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <ModalHeader>
          <SecondaryHeader>User Settings</SecondaryHeader>
          <CloseButton onClick={() => setModalIsOpen(false)}>
            <FaTimes size={20} />
          </CloseButton>
        </ModalHeader>
        <UserSettingsForm>
          <FormLabel htmlFor='newUsername'>Change User Name</FormLabel>
          <FormElement>
            <Input
              id='newUsername'
              name='newUsername'
              value={newUsername}
              onChange={() => setNewUsername(event.target.value)}
            />
            <UserSettingsButton>Submit</UserSettingsButton>
          </FormElement>
        </UserSettingsForm>
        <UserSettingsForm>
          <FormLabel for='newEmail'>Change Email</FormLabel>
          <FormElement>
            <Input id='newEmail' />
            <UserSettingsButton>Submit</UserSettingsButton>
          </FormElement>
        </UserSettingsForm>
        <UserSettingsForm>
          <FormLabel htmlFor='newPassword'>Change Password</FormLabel>
          <FormElement>
            <Input />
            <UserSettingsButton>Submit</UserSettingsButton>
          </FormElement>
        </UserSettingsForm>
      </Modal>
    </Nav>
  );
}
