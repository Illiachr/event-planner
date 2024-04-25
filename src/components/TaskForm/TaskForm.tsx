import { BaseSyntheticEvent } from 'react';

type Props = {
  editTaskId: number | null,
  dateValue: string,
  descValue: string,
  onChangeDate: (e: BaseSyntheticEvent) => void,
  onChangeDesc: (e: BaseSyntheticEvent) => void,
  onSubmit: (e: BaseSyntheticEvent) => void,
  onDelete: () => void,
}

const TaskForm = ({
  editTaskId,
  dateValue,
  descValue,
  onChangeDate,
  onChangeDesc,
  onSubmit,
  onDelete
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
      <button
        className="task-btn"
        type="submit"
        disabled={descValue.length === 0}
      >
        {editTaskId ? 'Edit' : 'Add'} Task
      </button>
      {editTaskId !== null && (
        <button
          className="task-btn task-delete"
          type="button"
          onClick={onDelete}
        >
          Delete
        </button>)}
    </form>
  );
};

export default TaskForm;
