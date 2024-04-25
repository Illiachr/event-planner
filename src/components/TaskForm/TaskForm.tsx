import React, { BaseSyntheticEvent } from 'react';

type Props = {
  dateValue: string,
  descValue: string,
  onChangeDate: (e: BaseSyntheticEvent) => void,
  onChangeDesc: (e: BaseSyntheticEvent) => void,
  onSubmit: (e: BaseSyntheticEvent) => void,
}

const TaskForm = ({
  dateValue,
  descValue,
  onChangeDate,
  onChangeDesc,
  onSubmit
}: Props) => {
  return (
    <form className="add-task-form" id="add-task-form" onSubmit={onSubmit}>
      <input 
        type="date" 
        name="taskDate" 
        id="task-date"
        value={dateValue}
        onChange={onChangeDate}
        />
      <input 
        type="text" 
        name="taskDesc" 
        id="task-desc"
        value={descValue}
        onChange={onChangeDesc}
        placeholder="Task Description"
        />
      {/* TODO: Move to a separate UI component */}
      <button className="task-btn" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
