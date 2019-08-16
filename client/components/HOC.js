import React, { useState } from 'react';
import Router from 'next/router';

import Error from './Error';

const WithForm = WrappedComponent => props => {
  const { initialState } = props
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const updateState = newValues => {
    setState({ ...state, ...newValues });
  };

  const handleChange = event => {
    updateState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (action, route) => async event => {
    try {
      event.preventDefault();
      await action(state);
      setState(initialState);
      if (route !== 'requestreset') {
        Router.push('/dashboard') 
      }
    } catch(error) {() => {}}
  }

  return (
    <WrappedComponent
      {...props}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onError={setError}
      values={state}
    >
      {error && <Error error={error} />}
    </WrappedComponent>
  )
}

export default WithForm;
