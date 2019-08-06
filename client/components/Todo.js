import React, { useState } from 'react';

import TodoStyles from '../styles/TodoStyles';

const Todo = ({ task }) => {
  const { id, content, isCompleted } = task;
  const [inputContent, setInputContent] = useState(content);
  const [status, setStatus] = useState(isCompleted);

  return (
    <TodoStyles isCompleted={isCompleted}>
      <div className="task-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="task-checkbox"
            value={isCompleted}
            checked={isCompleted}
            onChange={handleStatusChange}
          />
        </div>
        <span className="icon">
        </span>
        <div className="task-input-container">
          <input
            className="task-input" 
            value={content}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </TodoStyles>
  );

  function handleInputChange(event) {
    setInputContent(event.target.value);
  }

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }
};

export default Todo;
