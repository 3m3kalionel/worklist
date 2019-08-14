import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import shortid from 'shortid';

import TodoListStyles from '../styles/TodoListStyles';
import CreateTodo from './CreateTodo';
import AddNewTodo from './AddNewTodo';
import TodoListFooter from './TodoListFooter';

import CREATE_TODOLIST_MUTATION from '../graphql/mutations/CreateTodoList';
import CURRENT_USER_QUERY from '../graphql/queries/CurrentUser';

const CreateTodoList = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [newInputValue, setNewInputValue] = useState('');
  const hasContent = !!title || !!todos.length
  return (
    <Mutation
      mutation={CREATE_TODOLIST_MUTATION}
      variables={{ title, tasks: todos }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(createTodoList, { error, loading }) => (
        <TodoListStyles>
          <div id="create-todo-list-container">
            <div id="todo-list-title-container">
              <input
                id="todo-list-title"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div id="todo-list-body-container">
              {todos.map((task, i) => (
                <CreateTodo
                  key={i}
                  task={task}
                  handleInputChange={handleInputChange}
                  handleInputChecked={handleInputChecked}
                  handleDelete={handleDelete}
                />
              )
              )}
            </div>
            <AddNewTodo handleChange={handleNewInputChange} />
            <TodoListFooter
              type="create-todo-list"
              hasContent={hasContent}
              onCreate={(() => handleClick(createTodoList))}
              onCancel={clearState}
            />
          </div>
        </TodoListStyles>
      )}
    </Mutation>
  );

  function clearState() {
    setTitle('');
    setTodos([]);
  }

  function handleDelete(id) {
    return (event) => {
      const newTodos = todos.filter(todo => !(todo.identifier === id));
      setTodos(newTodos);
    }
  }

  function handleClick(fn) {
    todos.forEach(todo => delete todo.identifier);
    fn().then(() => {
      clearState()
    })
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleInputChange(id) {
    return (event) => {
      const newTodos = todos.map(todo =>
        todo.identifier === id
          ? { ...todo, content: event.target.value }
          : todo
      );
      setTodos(newTodos);
    }
  }

  function handleInputChecked(id) {
    return (event) => {
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
    const identifier = shortid.generate();
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

export default CreateTodoList;
