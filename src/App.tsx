import { BaseSyntheticEvent, useState } from 'react';
import { Modal } from './components/UI/index.ts';
import { Calendar, TaskForm } from './components/index.ts';
import { ITask } from './types/taskTypes.ts';
import { formatDate } from './utils/dateUtils.ts';

const taskDateInit = formatDate(new Date());

// const currentDate = new Date();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();
// const monthFirstDay = new Date(year, month, 1);
// const monthLastDay = new Date(year, month + 1, 0);
// const weekFirstDay = monthFirstDay.getDay();
// const totalDays = monthLastDay.getDate();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [taskDate, setTaskDate] = useState(taskDateInit);
  const [taskDesc, setTaskDesc] = useState('');
  const [taskData, setTaskData] = useState<Array<ITask>>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const handleModalClose = () => {
    setEditTaskId(null);
    setShowModal(false);
  };

  const onAddTask = (date: string = taskDateInit) => {
    // setEditMode(false);
    // const newTaskDate = new Date(date);
    setTaskDate(date);
    setShowModal(true);
  };

  const onEditTask = (id: number) => {
    setEditTaskId(id);
    console.log({id});
    
    const editTask = taskData.find((task) => task.id === id);
    if (editTask) {
      setTaskDate(editTask.date);
      setTaskDesc(editTask.desc);
      setShowModal(true);
    }
  };

  const handleTaskDateInput = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setTaskDate(value);
  };

  const handleTaskDescInput = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setTaskDesc(value);
  };

  const resetTaskForm = () => {
    setTaskDate(taskDateInit);
    setTaskDesc('');
  };

  const handleTaskSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (editTaskId !== null) {
      console.log('Edit mode: find task by id:', editTaskId);
      // implement task edit
      return;
    }
    const newTaskData = {
      date: taskDate,
      desc: taskDesc
    };
    setTaskData((prev) => [...prev, {...newTaskData, id: prev.length}]);
    setShowModal(false);
    resetTaskForm();
  };

  const handleTaskDelete = () => {
    setTaskData(prev => prev.filter((task) => editTaskId !== task.id));
  };

  return (
    <>
      <div className="planner">
        <h1>Event Planner</h1>
        <Calendar
          data={taskData}
          onAddTask={onAddTask}
          onTaskEdit={onEditTask}
        />
      </div>
      <button
        type="button"
        className="task-btn add-task-btn"
        onClick={() => onAddTask()}
      >
        Add Task
      </button>
      <Modal visibility={showModal} onClose={handleModalClose}>
        <TaskForm
          editTaskId={editTaskId}
          dateValue={taskDate}
          descValue={taskDesc}
          onChangeDate={handleTaskDateInput}
          onChangeDesc={handleTaskDescInput}
          onDelete={handleTaskDelete}
          onSubmit={handleTaskSubmit}
        />
      </Modal>
    </>
  );
}

export default App;
