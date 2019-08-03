import React, { useState } from 'react';

import Signup from '../components/Signup';
import Signin from '../components/Signin';
import AuthPageTabs from '../components/AuthPageTabs';
import AuthStyles from '../styles/AuthStyles';

const Auth = () => {
  const [page, setPage] = useState('signup');

  return (
    <AuthStyles>
      <AuthPageTabs toggleAuthPage={toggleAuthPage} page={page} />
      {
        page === 'signup'
        ? <Signup
          initialState={{ username: "", email: "", phoneNumber: "", password: "" }}
        />
        : <Signin initialState={{ email: "", password: "" }} />
      }
    </AuthStyles>
  )

  function toggleAuthPage(event) {
    setPage(event.target.getAttribute('data-name'));
  }
}

export default Auth;
