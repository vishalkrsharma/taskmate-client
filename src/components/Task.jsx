import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';
import useTask from '../hooks/useTask';
import { Button, Input, SecondaryHeader, Form, TextArea, Select, CloseButton } from '../styles/styles';
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

function Task({ task, idx }) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const { _id, category, clientName, job, startDate, endDate, status, remarks } = task;
  const { editTask, deleteTask } = useTask();
  const [editedTask, setEditedTask] = useState(task);

  function openEditModal() {
    setEditModalIsOpen(true);
  }

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function closeEditModal() {
    setEditModalIsOpen(false);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

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
    <tr>
      <td style={{ textAlign: 'right' }}>{idx + 1}</td>
      <td>{category}</td>
      <td>{clientName}</td>
      <td>{job}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{status}</td>
      <td>{remarks}</td>
      <OperationsTd>
        {/* <BiPencil />
        <BiTrash /> */}
        <button
          onClick={() => {
            editTsk();
          }}
        >
          Edit
        </button>
        <button onClick={() => deleteTsk()}>Delete</button>
      </OperationsTd>

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalHeader>
          <ModalHeading>New Task</ModalHeading>
          <CloseButton onClick={closeEditModal}>
            <FaTimes />
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
        <Container>
          <ModalButton onClick={handleEditSubmit}>Edit</ModalButton>
          <ModalButton onClick={closeEditModal}>Cancel</ModalButton>
        </Container>
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
      >
        <ModalHeader>
          <ModalHeading>Delete Task?</ModalHeading>
        </ModalHeader>
        <Container>
          <ModalButton onClick={handleDeleteSubmit}>Yes</ModalButton>
          <ModalButton onClick={closeDeleteModal}>No</ModalButton>
        </Container>
      </Modal>
    </tr>
  );
}

export default Task;

const OperationsTd = styled.td`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  height: 100%;
  border-collapse: collapse;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

const ModalHeading = styled(SecondaryHeader)`
  margin-bottom: 1rem;
`;

const ModalButton = styled(Button)`
  font-size: 1.5rem;
  float: right;
`;
