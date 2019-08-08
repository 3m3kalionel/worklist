import React, { useState } from 'react';

import Signup from '../components/Signup';
import Signin from '../components/Signin';
import AuthPageTabs from '../components/AuthPageTabs';

import AuthPageStyles, { Container } from '../styles/AuthPageStyles';

const Auth = () => {
  const [page, setPage] = useState('signup');

  return (
    <AuthPageStyles>
      <h1>Worklist</h1>
      <Container>
        <AuthPageTabs toggleAuthPage={toggleAuthPage} page={page} />
        {
          page === 'signup'
          ? <Signup
            initialState={{
              username: "",
              email: "",
              phoneNumber: "",
              password: ""
            }}
          />
          : <Signin initialState={{ email: "", password: "" }} />
        }
      </Container>
    </AuthPageStyles>
  )

  function toggleAuthPage(event) {
    setPage(event.target.getAttribute('data-name'));
  }
}

export default Auth;
