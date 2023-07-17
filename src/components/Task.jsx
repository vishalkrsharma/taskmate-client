import React, { useState } from 'react';
import Modal from 'react-modal';
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
import { TaskButtonContainer, TaskContainer } from '../styles/TaskStyles';

export default function Task({ task }) {
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
    setEditedTask(task);
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
      <div>Job: {job.length > 20 ? job.substring(0, 20) + '...' : job}</div>
      <div>Category: {category.length > 20 ? category.substring(0, 20) + '...' : category}</div>
      <div>Client Name: {clientName.length > 20 ? clientName.substring(0, 20) + '...' : clientName}</div>
      <div>
        Duration: {startDate} to {endDate}
      </div>
      <div>Remarks: {remarks.length > 20 ? remarks.substring(0, 20) + '...' : remarks}</div>
      <div>Status: {status}</div>
      <TaskButtonContainer>
        <Button onClick={openEditModal}>Edit</Button>
        <Button onClick={openDeleteModal}>Delete</Button>
      </TaskButtonContainer>
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
