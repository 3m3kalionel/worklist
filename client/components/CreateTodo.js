import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

import TodoStyles from '../styles/TodoStyles';

const Todo = props => {
  const { task, handleInputChange, handleInputChecked, handleDelete } = props;
  const { identifier, content, isCompleted } = task;

  return (
    <TodoStyles isCompleted={isCompleted}>
      <div className="task-container">
        <div className="checkbox-container">
          <input
            id={identifier}
            type="checkbox"
            className="task-checkbox"
            value={isCompleted}
            checked={isCompleted}
            onChange={handleInputChecked(identifier)}
          />
        </div>
        <span className="icon" data-tip="Delete" place="bottom">
          < FontAwesomeIcon icon={faTrashAlt} onClick={handleDelete(identifier)}  />
          <ReactTooltip />
        </span>
        <div className="task-input-container">
          <input
            id={identifier}
            className="task-input" 
            value={content}
            onChange={handleInputChange(identifier)}
            autoFocus
          />
        </div>
      </div>
    </TodoStyles>
  );
};

export default Todo;
