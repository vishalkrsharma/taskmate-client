import Modal from 'react-modal';
import { ModalStyles } from '../styles/styles';

export default function Mddal({ modalIsOpen, setModalIsOpen, children }) {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={ModalStyles}
    >
      {children}
    </Modal>
  );
}
