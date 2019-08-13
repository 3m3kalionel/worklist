import React, { Fragment } from "react";
import Link from 'next/link';

import TodoList from '../components/TodoList';
import User from '../components/User';
import ReAuth from '../components/ReAuth';

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

const dashboard = (props) => {
  const { query } = props;
  return (
    <ReAuth>
      <Dashboard>
        <InnerDashboard>
          <CardContainer>
            <User>
              {({data: { currentUser } }) => {
                return currentUser && currentUser.authoredTodoLists.length
                  ? currentUser.authoredTodoLists.map((todoList, i) => {
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
                  : (<h4>You do not have any todo lists</h4>)
              }}
            </User> 
          </CardContainer>
        </InnerDashboard>
      </Dashboard>
    </ReAuth>
  )
};

export default dashboard;
