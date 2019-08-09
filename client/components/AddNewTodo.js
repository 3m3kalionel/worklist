import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

 import TodoStyles from '../styles/TodoStyles';

 const AddNewTodo = ({ handleChange }) => (
  <TodoStyles>
    <div className="task-container">
      <div className="checkbox-container">
        <span className="task-checkbox add-new-input">
        <FontAwesomeIcon
          icon={faPlus}
        />            
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

export default AddNewTodo;
 