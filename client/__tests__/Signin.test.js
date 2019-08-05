import React from 'react';
import {
  render,
  wait,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import { MockedProvider } from 'react-apollo/test-utils';

import Signin from '../components/Signin';
import SIGN_IN_MUTATION from '../graphql/mutations/Signin';

const mocks = [
  {
    request: {
      query: SIGN_IN_MUTATION,
      variables: {
        email: "emeka@gmail.com",
        password: "1234"
      },
    },
    result: {
      data:  { requestResetPasswordLink: { message: 'sucess' } },
    }
  }
];

describe('<Signin />', () => {
  let submitButton;

  // it('renders the initial loading text', () => {
  //   const { getByText, debug } = render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <Signin initialState={{ email: "emeka@gmail.com", password: "1234" }} />
  //     </MockedProvider>
  //   );
  //   // const loadingText = getByText('Loading...');
  //   // const loadingText = getByText('Loading...');
  //   const welcomeText = getByText('Welcome Back');
  //   console.log('*****');
  //   debug();

  //   expect(welcomeText).toBeTruthy();
  // })

  it ('renders the sign up form Login button', async () => {
    const { getByText, container, debug } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Signin
          onSubmit={() => {}}
          onChange={() => {}}
          values={{ email: "emeka@gmail.com", password: "1234" }} 
        />
      </MockedProvider>
    );

    // console.log('*****', debug);
    submitButton = container.querySelector('button');

    expect(submitButton).toBeTruthy();
  });


  // it  ('should print true', () => {
  //   expect(true).toBeTruthy();
  // })
});
