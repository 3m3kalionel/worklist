import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  wait,
} from '@testing-library/react';

import { ApolloProvider } from 'react-apollo';

import RequestReset from '../components/RequestReset';
import { REQUEST_RESET_MUTATION } from '../graphql/mutations/RequestReset';
// import { MockedProvider } from 'react-apollo/test-utils'
import { GraphQLError } from 'graphql';
import { createMockClient } from 'mock-apollo-client';

jest.mock("../components/HOC", () => Component => {
  const mockHOC = props => (
    <div><Component {...props} /></div>
  );
  
  return mockHOC;
});

// const mocks = [
//   {
//     request: {
//       query: REQUEST_RESET_MUTATION
//       variables: { recipientEmail: 'sege@gmail.com' }
//     },
//     result: {
//       data: {
//         requestResetPasswordLink: { message: 'Check your email for a reset link' }
//       }
//     }
//   }
// ]

describe('<RequestReset />', () => {
  const mockClient = createMockClient();

  let submitButton;
  test('blah blah', () => {
    const { getByText, container } = render(
      // <MockedProvider mocks={mocks} addTypename={false}>
      //   <RequestReset />
      // </MockedProvider>
      <ApolloProvider client={mockClient}>
        <RequestReset initialState={{ email: "" }} />
      </ApolloProvider>
    );

    submitButton = container.querySelector('button');
    expect(submitButton).toBeTruthy
  });
});
