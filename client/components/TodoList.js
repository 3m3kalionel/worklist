import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import shortid from 'shortid';

import TodoListStyles from '../styles/TodoListStyles';
import Todo from './Todo';
import AddNewTodo from './AddNewTodo';
import TodoListFooter from './TodoListFooter';

import CREATE_TODOLIST_MUTATION from '../graphql/mutations/CreateTodoList'

const TodoList = ({ id, title, tasks, query }) => {
  const [useTitle, setTitle] = useState('');
  const [inputValue, setInputValue] = useState(title);
  const [todos, setTodos] = useState([]);
  const [newInputValue, setNewInputValue] = useState('');
  // const [newInputValue, setNewInputValue] = useState('');
  console.log({ todos })
  return (
    <Mutation
      mutation={CREATE_TODOLIST_MUTATION}
      variables={{ title, tasks }}
    >
      {(createTodoList, { error, loading }) => (
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
              {todos.map((task, i) => (
                <Todo
                  key={i}
                  task={task}
                  handleInputChange={handleInputChange}
                  handleInputChecked={handleInputChecked}
                />
              )
              )}
            </div>
            <AddNewTodo inputValue={inputValue} handleChange={handleNewInputChange} />
            <TodoListFooter query={query} onClick={createTodoList} />
          </div>
        </TodoListStyles>
      )}
    </Mutation>
  );

  function handleTitleChange(event) {
    setTitle()
  }

  function handleInputChange(id) {
    // setInputValue(event.target.vale);
    return (event) => {
      console.log(event.target.value)
      // console.log({ id, e: event.target.value});
      const newTodos = todos.map(todo =>
        todo.identifier === id
          ? { ...todo, content: event.target.value }
          : todo
      );
      setTodos(newTodos);
    }
  }

  function handleInputChecked(id) {
    // setInputValue(event.target.vale);
    return (event) => {
      // console.log({ id, e: event.target.value});
      const newTodos = todos.map(todo =>
        todo.identifier === id
          ? { ...todo, isCompleted: event.target.checked }
          : todo
      );
      setTodos(newTodos);
    }
  }

  function handleNewInputChange(event) {
    event.persist();
    console.log({event})
    const identifier = shortid.generate();
    // setTodos((prevTodo) => {
    //   console.log({ prevTodo });
    //   prevTodo.set(identifier, <Todo
    //     content={event.target.value}
    //     checked={false}
    //     key={identifier}
    //     id={identifier}
    //   />)
    //   return prevTodo;
    // })
    setTodos([
      ...todos,
      {
        content: event.target.value,
        isCompleted: false,
        identifier,
      }
    ]);
    event.target.value = '';
  }
};

export default TodoList;
