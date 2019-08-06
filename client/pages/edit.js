import React, { Fragment } from 'react';

import TodoList from '../components/TodoList';

const EditTodoListPage = () => (
  <>
    <h1>Welcome to the todo list page edit</h1>
    <TodoList tasks={[]} />
  </>
);

export default EditTodoListPage
