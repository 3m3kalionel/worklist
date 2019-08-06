import React, { useState } from 'react';

import TodoListStyles from '../styles/TodoListStyles';
import Todo from './Todo';
import TodoListFooter from './TodoListFooter';

const TodoList = ({ id, title, tasks, query }) => {
  const [inputValue, setInputValue] = useState(title);
  return (
    <TodoListStyles>
      <div id="todo-list-container">
        <div id="todo-list-title-container">
          <input
            id="todo-list-title"
            placeholder="Title"
            value={inputValue}
            onChange={handleInputChange}
          />
          <span id="pin-icon">
            a
          </span>
        </div>
        <div id="todo-list-body-container">
          {tasks.map((task, i) => (
            <Todo
              key={i}
              task={task}
            />
          )
          )}
        </div>
        <TodoListFooter query={query} />
      </div>
    </TodoListStyles>
  );

  function handleInputChange(event) {
    setInputValue(event.target.vale);
  }
};

export default TodoList;
