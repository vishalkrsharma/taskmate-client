import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';
import useTask from '../hooks/useTask';
import {
  Button,
  Input,
  SecondaryHeader,
  Form,
  TextArea,
  Select,
  CloseButton,
  ModalStyles,
  ModalHeader,
  ModalButton,
  ModalButtonContainer,
} from '../styles/styles';
import { FaTimes } from 'react-icons/fa';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Task({ task }) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const { _id, category, clientName, job, startDate, endDate, status, remarks } = task;
  const { editTask, deleteTask } = useTask();
  const [editedTask, setEditedTask] = useState(task);

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const editTsk = (_id) => {
    openEditModal();
  };

  const deleteTsk = (_id) => {
    setDeleteModalIsOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = () => {
    editTask(editedTask);
    closeEditModal();
  };

  const handleDeleteSubmit = () => {
    deleteTask(_id);
  };

  return (
    <TaskContainer>
      <Job>Job: {job}</Job>
      <div>Category: {category.length > 20 ? category.substring(0, 20) + '...' : category}</div>
      <div>Client Name: {clientName.length > 20 ? clientName.substring(0, 20) + '...' : clientName}</div>
      <div>
        Duration: {startDate} to {endDate}
      </div>
      <div>Remarks: {remarks.length > 20 ? remarks.substring(0, 20) + '...' : remarks}</div>
      <div>Status: {status}</div>
      <ButtonContainer>
        <Button onClick={openEditModal}>Edit</Button>
        <Button onClick={openDeleteModal}>Delete</Button>
      </ButtonContainer>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        style={ModalStyles}
      >
        <ModalHeader>
          <SecondaryHeader>New Task</SecondaryHeader>
          <CloseButton onClick={closeEditModal}>
            <FaTimes size={20} />
          </CloseButton>
        </ModalHeader>
        <Form>
          <Input
            type='text'
            name='category'
            placeholder='Category'
            value={editedTask.category}
            onChange={handleChange}
          />
          <Input
            type='text'
            name='clientName'
            placeholder='Client Name'
            value={editedTask.clientName}
            onChange={handleChange}
          />

          <Input
            type='date'
            name='startDate'
            value={editedTask.startDate}
            onChange={handleChange}
          />
          <Input
            type='date'
            name='endDate'
            value={editedTask.endDate}
            onChange={handleChange}
          />

          <TextArea
            cols='40'
            rows='5'
            type='text'
            name='job'
            placeholder='Job'
            value={editedTask.job}
            onChange={handleChange}
          />
          <TextArea
            cols='40'
            rows='5'
            type='text'
            name='remarks'
            placeholder='Remarks'
            value={editedTask.remarks}
            onChange={handleChange}
          />
          <Select
            name='status'
            value={editedTask.status}
            onChange={handleChange}
          >
            <option
              style={{
                display: 'none',
              }}
              value=''
              disabled
            >
              Select Status
            </option>
            <option value='Pending'>Pending</option>
            <option value='Pending For Payment'>Pending For Payment</option>
            <option value='Completed'>Completed</option>
          </Select>
        </Form>
        <ModalButtonContainer>
          <ModalButton onClick={handleEditSubmit}>Edit</ModalButton>
          <ModalButton onClick={closeEditModal}>Cancel</ModalButton>
        </ModalButtonContainer>
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={ModalStyles}
      >
        <ModalHeader>
          <SecondaryHeader>Delete Task?</SecondaryHeader>
        </ModalHeader>
        <ModalButtonContainer>
          <ModalButton onClick={handleDeleteSubmit}>Yes</ModalButton>
          <ModalButton onClick={closeDeleteModal}>No</ModalButton>
        </ModalButtonContainer>
      </Modal>
    </TaskContainer>
  );
}

export default Task;

const TaskContainer = styled.div`
  font-size: 1.75rem;
  border: 2px solid var(--accent);
  padding: 1rem;
  border-radius: 1rem;
  width: 35rem;
  overflow-x: hidden;
`;

const Job = styled.div`
  font-size: 1.9rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
