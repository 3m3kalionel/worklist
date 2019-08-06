import React, { useState } from 'react';

import TodoStyles from '../styles/TodoStyles';

const AddNewTodo = ({ handleChange }) => {
  return (
    <TodoStyles>
      <div className="task-container">
        <div className="checkbox-container">
          <span className="task-checkbox add-new-input">
            a
          </span>
        </div>
        <div className="task-input-container">
          <input
            className="new-note-task-input"
            id="list-new-task"
            placeholder="List item"
            onChange={handleChange}
          />
        </div>
      </div>
    </TodoStyles>
  )
}

export default AddNewTodo;
