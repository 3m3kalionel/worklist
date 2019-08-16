import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ApolloProvider } from 'react-apollo';
import '@testing-library/react/cleanup-after-each';
import { createMockClient } from 'mock-apollo-client';

import Signin from '../Signin';

import SIGN_IN_MUTATION from '../../../graphql/mutations/Signin';

jest.mock("../../HOC.js", () => Component => {
  const mockHOC = props => (
    <div><Component {...props} /></div>
  );

   return mockHOC;
});

const setup = (values, onSubmit) => {
  const onSubmitHandler = onSubmit || jest.fn();
  const mockClient = createMockClient();

  mockClient.setRequestHandler(
    SIGN_IN_MUTATION,
    () => Promise.resolve({
      data: {
        signin: {
          id: "cjyu8h6467e380b53tn7ezb58",
          username: "emeka",
          email: "emeka.l.okoro@gmail.com",
          profilePicUrl: null,
          authoredTodoLists: null,
          todoListsContributedTo: null
        }
      }
    })
  );

  const {
    container,
    getByText,
    getByTestId
  } = render(
    <ApolloProvider client={mockClient}>
      <Signin
        values={values}
        onSubmit={onSubmitHandler}
        onChange={jest.fn()}
      />
    </ApolloProvider>
  );

  return { container, getByText, getByTestId }
}

describe('<Signin />', () => {
  test('renders an empty form', () => {
    const { container } = setup({
      email: "",
      password: ""
    });

    expect(container).toMatchSnapshot();
  });

  test('renders text in the form input', () => {
    const { container } = setup({
      usernname: "username",
      email: "email@gmail.com",
    });

    expect(container).toMatchSnapshot();
  });

  test('calls the submit handler when button is clicked', () => {
    const onSubmitHandler = jest.fn();
    const {
      container,
      getByTestId
    } = setup({
      usernname: "username",
      email: "email@gmail.com",
      password: "password",
      phoneNumber: "phoneNumber"
      },
      onSubmitHandler
    );
    const form = getByTestId('form');
    fireEvent.submit(form);
  
    expect(onSubmitHandler).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
})
