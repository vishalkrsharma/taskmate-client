import React, { useEffect, useRef, useState } from 'react';
import { CloseButton, Input, Logo, ModalHeader, SecondaryHeader } from '../styles/styles';
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
  const { changeUsername, changeEmail, changePassword } = useUser();

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

  const handleChangeUsername = (event) => {
    event.preventDefault();
    changeUsername(newUsername);
    setIsOpen(false);
  };

  const handleChangeEmail = (event) => {
    event.preventDefault();
    changeEmail(newEmail);
    setIsOpen(false);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    changePassword(newPassword);
    setIsOpen(false);
  };

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
            <UserSettingsButton onClick={handleChangeUsername}>Submit</UserSettingsButton>
          </FormElement>
        </UserSettingsForm>
        <UserSettingsForm>
          <FormLabel htmlFor='newEmail'>Change Email</FormLabel>
          <FormElement>
            <Input
              id='newEmail'
              onChange={() => setNewEmail(event.target.value)}
            />
            <UserSettingsButton onClick={handleChangeEmail}>Submit</UserSettingsButton>
          </FormElement>
        </UserSettingsForm>
        <UserSettingsForm>
          <FormLabel htmlFor='newPassword'>Change Password</FormLabel>
          <FormElement>
            <Input
              id='newPassword'
              onChange={() => setNewPassword(event.target.value)}
            />
            <UserSettingsButton onClick={handleChangePassword}>Submit</UserSettingsButton>
          </FormElement>
        </UserSettingsForm>
      </Modal>
    </Nav>
  );
}
