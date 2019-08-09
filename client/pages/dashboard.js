import React from "react";
import { Query } from 'react-apollo';
import Link from 'next/link';

import TodoList from '../components/TodoList';
import CreateTodoList from '../components/CreateTodoList'
import ALL_TODO_LISTS_QUERY from '../graphql/queries/AllTodos';

import styled from 'styled-components';
const Dashboard = styled.div`
  height: 100vh;
`;

const InnerDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.white};
  justify-content: center;
  height: 100%;
`;

const CardContainer = styled.div`
  max-width: 823px;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.white};
  justify-content: center;
`;

const CreateTodoListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const dashboard = (props) => {
  const { query } = props;
  return (
    <Query query={ALL_TODO_LISTS_QUERY}>
      {({ error, data, loading }) => (
        <Dashboard>
          <InnerDashboard>
            <CreateTodoListContainer>
              <CreateTodoList />
            </CreateTodoListContainer>
            <CardContainer>
              {
                data.getTodoLists.map((todoList, i) => {
                  const { title, id, tasks } = todoList;
                  return (
                    <Link href={`/edit?todoId=${id}`} key={i}>
                      <a>
                        <TodoList
                          id={id}
                          title={title}
                          tasks={tasks}
                          query={query}
                        />
                      </a>
                    </Link>
                  )
                })
              }
            </CardContainer>
          </InnerDashboard>
        </Dashboard>
      )}
    </Query>
  )
};

export default dashboard;
