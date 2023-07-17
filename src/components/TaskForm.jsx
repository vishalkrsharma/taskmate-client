import React, { useState } from 'react';
import { Button, Input, SecondaryHeader, Form, TextArea, Select, CloseButton, ModalStyles, ModalHeader } from '../styles/styles';
import Modal from 'react-modal';
import useTask from '../hooks/useTask';
import { FaTimes, FaPlus } from 'react-icons/fa';
import { NewTaskButton } from '../styles/TaskFormStyles';

function TaskForm() {
  const [taskInfo, setTaskInfo] = useState({
    category: '',
    clientName: '',
    job: '',
    startDate: '',
    endDate: '',
    status: '',
    remarks: '',
  });

  const { newTask } = useTask();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTaskInfo({
      category: '',
      clientName: '',
      job: '',
      startDate: '',
      endDate: '',
      status: '',
      remarks: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTask(taskInfo);
    closeModal();
    setTaskInfo({ category: '', clientName: '', job: '', startDate: '', endDate: '', status: '', remarks: '' });
  };

  return (
    <div>
      <NewTaskButton onClick={openModal}>
        New Task
        <FaPlus />
      </NewTaskButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
      >
        <ModalHeader>
          <SecondaryHeader>New Task</SecondaryHeader>
          <CloseButton onClick={closeModal}>
            <FaTimes size={20} />
          </CloseButton>
        </ModalHeader>
        <Form>
          <Input
            type='text'
            name='category'
            placeholder='Category'
            value={taskInfo.category}
            onChange={handleChange}
          />
          <Input
            type='text'
            name='clientName'
            placeholder='Client Name'
            value={taskInfo.clientName}
            onChange={handleChange}
          />
          <Input
            type='date'
            name='startDate'
            value={taskInfo.startDate}
            onChange={handleChange}
          />
          <Input
            type='date'
            name='endDate'
            value={taskInfo.endDate}
            onChange={handleChange}
          />

          <TextArea
            cols='40'
            rows='5'
            type='text'
            name='job'
            placeholder='Job'
            value={taskInfo.job}
            onChange={handleChange}
          />
          <TextArea
            cols='40'
            rows='5'
            type='text'
            name='remarks'
            placeholder='Remarks'
            value={taskInfo.remarks}
            onChange={handleChange}
          />
          <Select
            name='status'
            value={taskInfo.status}
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
            <option value='Pending for fees'>Pending for fees</option>
            <option value='Completed'>Completed</option>
          </Select>
        </Form>
        <Button
          style={{
            float: 'right',
            fontSize: '1.5rem',
          }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Modal>
    </div>
  );
}

export default TaskForm;
