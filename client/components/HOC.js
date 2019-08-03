import React, { useState } from 'react';
import Router from 'next/router'

export const WithForm = WrappedComponent => props => {
  const { initialState } = props
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const updateState = newValues => {
    setState({ ...state, ...newValues });
  };

  const clearState = () => {
    setState({})
  }

  const handleChange = event => {
    updateState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (action, route) => async event => {
    event.preventDefault();
    await action(state);
    setState(initialState);
    if (route !== 'requestreset') {
      Router.push('/dashboard') 
    }
  }

  return (
    <WrappedComponent
      {...props}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onError={setError}
      values={state}
    />
  )
}
