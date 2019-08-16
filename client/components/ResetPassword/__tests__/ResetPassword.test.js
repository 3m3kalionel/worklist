import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ApolloProvider } from 'react-apollo';
import '@testing-library/react/cleanup-after-each';
import { createMockClient } from 'mock-apollo-client';

import ResetPassword from '../ResetPassword';

import RESET_PASSWORD_MUTATION from '../../../graphql/mutations/ResetPassword';

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
    RESET_PASSWORD_MUTATION,
    () => Promise.resolve({
      data: {
        resetPassword: {
          id: "cjzdoavvjvgby0b53mie0fqc3",
          username: "gee",
          email: "gee@gmail.com",
          profilePicUrl: null,
          authoredTodoLists: [],
          todoListsContributedTo: []
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
      <ResetPassword
        values={values}
        onSubmit={onSubmitHandler}
        onChange={jest.fn()}
      />
    </ApolloProvider>
  );

  return { container, getByText, getByTestId }
}

describe('<Signup />', () => {
  test('renders an empty form', () => {
    const { container } = setup({
      password: "",
      confirmPassword: "",
    });

    expect(container).toMatchSnapshot();
  });

  test('renders text in the form input', () => {
    const { container } = setup({
      password: "password",
      confirmPassword: "confirmPassword",
    });

    expect(container).toMatchSnapshot();
  });

  test('calls the submit handler when button is clicked', () => {
    const onSubmitHandler = jest.fn();
  
      const {
        container,
        getByTestId
      } = setup({
          password: "password",
          confirmPassword: "confirmPassword",
        },
        onSubmitHandler
      );
      const form = getByTestId('form');
      fireEvent.submit(form);
  
      expect(onSubmitHandler).toHaveBeenCalled();
      expect(container).toMatchSnapshot();
    });
})
