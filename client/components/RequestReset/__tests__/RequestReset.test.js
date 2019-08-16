import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import { ApolloProvider } from 'react-apollo';
import '@testing-library/react/cleanup-after-each';
import { createMockClient } from 'mock-apollo-client';

import RequestReset from '../RequestReset';

import REQUEST_RESET_MUTATION from '../../../graphql/mutations/RequestReset';

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
    REQUEST_RESET_MUTATION,
    () => Promise.resolve({
      data: {
        requestResetPasswordLink: {
          message: 'Check your email for a reset link',
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
      <RequestReset
        values={values}
        onSubmit={onSubmitHandler}
        onChange={jest.fn()}
      />
    </ApolloProvider>
  );

  return { container, getByText, getByTestId }
}

describe('<RequestReset />', () => {
  test('renders an empty form', async () => {
    const { container } = setup({ email: "" });

    expect(container).toMatchSnapshot();    
  });

  test('renders text in the form input', () => {
    const { container } = setup({ email: "email@gmail.com" });

    expect(container).toMatchSnapshot();
  });

  test('calls the submit handler when button is clicked', async () => {
    const onSubmitHandler = jest.fn();
    const {
      container,
      getByTestId
    } = setup({ email: "email@gmail.com" }, onSubmitHandler);
    const form = getByTestId('form');
    fireEvent.submit(form);

    expect(onSubmitHandler).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
})
