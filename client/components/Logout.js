import React from 'react';
import { Mutation } from 'react-apollo';

import CURRENT_USER_MUTATION from '../graphql/queries/CurrentUser';
import LOGOUT_MUTATION from '../graphql/mutations/Logout';

const Logout = () => (
  <Mutation
    mutation={LOGOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_MUTATION }]}
  >
    {logout => <button onClick={logout}>Logout</button>}
  </Mutation>
);

export default Logout;
