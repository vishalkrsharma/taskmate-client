import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Button, Input, SecondaryHeader } from '../styles/styles';
import Modal from 'react-modal';
import useTask from '../hooks/useTask';
import { BiPlus } from 'react-icons/bi';

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  Modal.setAppElement('#root');

  return (
    <>
      <div>
        <NewTaskButton onClick={openModal}>
          New Task
          <BiPlus color='white' />
        </NewTaskButton>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <SecondaryHeader>New Task</SecondaryHeader>
            <button onClick={closeModal}>close</button>
          </div>
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
              <option value='Pending For Payment'>Pending For Payment</option>
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
    </>
  );
}

export default TaskForm;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  flex-direction: row;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #51a0fb;
  border-radius: 1rem;
  resize: none;
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid #51a0fb;
  border-radius: 1rem;
  background-color: #ffffff;
`;

const NewTaskButton = styled.button`
  font-size: 1.75rem;
  background-color: #3893fa;
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;
