import React, { Fragments, useState } from 'react';

import Signup from '../components/Signup';

const Auth = () => {
  const [page, setPage] = useState('signup');

  return (
    <Signup
      initialState={{ username: "", email: "", phoneNumber: "", password: "" }}
    />
  )
}

export default Auth;
