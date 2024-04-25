import { BaseSyntheticEvent, useState } from 'react';
import { Modal } from './components/UI/index.ts';
import { Calendar, TaskForm } from './components/index.ts';

const formatDate = (date: Date) => date.toISOString().split('T')[0];
const taskDateInit = formatDate(new Date());

function App() {
  const [showModal, setShowModal] = useState(false);
  const [taskDate, setTaskDate] = useState(taskDateInit);
  const [taskDesc, setTaskDesc] = useState('');

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleTaskDateInput = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setTaskDate(value);
  };

  const handleTaskDescInput = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setTaskDesc(value);
  };

  const handleTaskSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const taskData = {
      date: taskDate,
      desc: taskDesc
    };
    console.log({taskData});
  };

  return (
    <>
      <div className="planner">
        <h1>Event Planner</h1>
        <Calendar />
      </div>
      <button
        type="button"
        className="task-btn add-task-btn"
        onClick={handleModalOpen}
      >
        Add Task
      </button>
      <Modal visibility={showModal} onClose={handleModalClose}>
        <TaskForm
          dateValue={taskDate}
          descValue={taskDesc}
          onChangeDate={handleTaskDateInput}
          onChangeDesc={handleTaskDescInput}
          onSubmit={handleTaskSubmit}
        />
      </Modal>
    </>
  );
}

export default App;
