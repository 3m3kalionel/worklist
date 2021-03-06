import React from 'react';

import TodoStyles from '../styles/TodoStyles';

const Todo = ({ task }) => {
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
            readOnly
          />
        </div>
        <div className="task-input-container">
          <input
            id={identifier}
            className="task-input" 
            defaultValue={content}
            autoFocus
          />
        </div>
      </div>
    </TodoStyles>
  );
};

export default Todo;
