import React, { useState } from 'react';
import Modal from './Modal';
import useTask from '../hooks/useTask';
import { Button, Input, SecondaryHeader, Form, TextArea, Select, CloseButton, ModalHeader, ModalButton, ModalButtonContainer } from '../styles/styles';
import { FaTimes } from 'react-icons/fa';
import { TaskButtonContainer, TaskContainer } from '../styles/TaskStyles';
import { FormLabel, EditFormElement } from '../styles/FormStyles';

export default function Task({ task }) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const { _id, category, clientName, job, startDate, endDate, status, remarks } = task;
  const { editTask, deleteTask } = useTask();
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = () => {
    editTask(editedTask);
    setEditModalIsOpen(false);
    setEditedTask(task);
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
        <Button onClick={() => setEditModalIsOpen(true)}>Edit</Button>
        <Button onClick={() => setDeleteModalIsOpen(true)}>Delete</Button>
      </TaskButtonContainer>
      <Modal
        modalIsOpen={editModalIsOpen}
        setModalIsOpen={setEditModalIsOpen}
      >
        <ModalHeader>
          <SecondaryHeader>New Task</SecondaryHeader>
          <CloseButton
            onClick={() => {
              setEditModalIsOpen(false);
              setEditedTask(task);
            }}
          >
            <FaTimes size={20} />
          </CloseButton>
        </ModalHeader>
        <Form>
          <EditFormElement>
            <FormLabel htmlFor='category'>Category</FormLabel>
            <Input
              id='category'
              type='text'
              name='category'
              placeholder='Category'
              value={editedTask.category}
              onChange={handleChange}
            />
          </EditFormElement>
          <EditFormElement>
            <FormLabel htmlFor='clientName'>Client Name</FormLabel>
            <Input
              id='clientName'
              type='text'
              name='clientName'
              placeholder='Client Name'
              value={editedTask.clientName}
              onChange={handleChange}
            />
          </EditFormElement>
          <EditFormElement>
            <FormLabel htmlFor='startDate'>Start Date</FormLabel>
            <Input
              id='startDate'
              type='date'
              name='startDate'
              value={editedTask.startDate}
              onChange={handleChange}
            />
          </EditFormElement>
          <EditFormElement>
            <FormLabel htmlFor='endDate'>End Date</FormLabel>
            <Input
              id='endDate'
              type='date'
              name='endDate'
              value={editedTask.endDate}
              onChange={handleChange}
            />
          </EditFormElement>
          <EditFormElement>
            <FormLabel htmlFor='job'>Job</FormLabel>
            <TextArea
              id='job'
              cols='40'
              rows='5'
              type='text'
              name='job'
              placeholder='Job'
              value={editedTask.job}
              onChange={handleChange}
            />
          </EditFormElement>
          <EditFormElement>
            <FormLabel htmlFor='remarks'>Remarks</FormLabel>
            <TextArea
              id='remarks'
              cols='40'
              rows='5'
              type='text'
              name='remarks'
              placeholder='Remarks'
              value={editedTask.remarks}
              onChange={handleChange}
            />
          </EditFormElement>
          <EditFormElement>
            <FormLabel htmlfor='status'>Status</FormLabel>
            <Select
              id='status'
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
          </EditFormElement>
        </Form>
        <ModalButtonContainer>
          <ModalButton onClick={handleEditSubmit}>Edit</ModalButton>
          <ModalButton onClick={() => setEditModalIsOpen(false)}>Cancel</ModalButton>
        </ModalButtonContainer>
      </Modal>
      <Modal
        modalIsOpen={deleteModalIsOpen}
        setModalIsOpen={setDeleteModalIsOpen}
      >
        <ModalHeader>
          <SecondaryHeader>Delete Task?</SecondaryHeader>
        </ModalHeader>
        <ModalButtonContainer>
          <ModalButton onClick={handleDeleteSubmit}>Yes</ModalButton>
          <ModalButton onClick={() => setDeleteModalIsOpen(false)}>No</ModalButton>
        </ModalButtonContainer>
      </Modal>
    </TaskContainer>
  );
}
