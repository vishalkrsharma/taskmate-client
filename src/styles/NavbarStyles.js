import { styled } from 'styled-components';

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

export { Nav, Menu, MenuButton, AvatarButton };
