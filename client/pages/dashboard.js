import React, { Fragment } from "react";
import Link from 'next/link';

import TodoList from '../components/TodoList';
import User from '../components/User';
import ReAuth from '../components/ReAuth';
import CreateTodoList from '../components/CreateTodoList';
import Navbar from '../components/Navbar';

import styled from 'styled-components';
const Dashboard = styled.div`
  height: 100vh;
  position: relative;
`;

const InnerDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.white};
  justify-content: center;
  height: 100%;
  margin-top: 60px;
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

const dashboard = props => {
  const { query } = props;
  return (
    <ReAuth>
      <Dashboard>
        <Navbar />
        <InnerDashboard>
          <CreateTodoListContainer>
            <CreateTodoList />
          </CreateTodoListContainer>
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
