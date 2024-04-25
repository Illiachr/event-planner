import { useState } from 'react';
import { Calendar } from './components/index.ts';

function App() {
  return (
    <>
      <div className="planner">
        <h1>Event Planner</h1>
        <Calendar />
      </div>
      <button
        type="button"
        className="task-btn add-task-btn"
      >
        Add Task
      </button>
    </>
  );
}

export default App;
