import React from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';

import AuthForm from '../styles/AuthForm';
import { WithForm } from './HOC';

import SIGN_IN_MUTATION from '../graphql/mutations/Signin';

const Signin = props => {
  console.log({ props })
  const { onChange, onSubmit, onError, values } = props;
  const { email, password } = values;

  return (
    <Mutation
      mutation={SIGN_IN_MUTATION}
      variables={{ email, password }}
    >
      {(signin, { error, loading }) => {
        if (loading) return (<p>Loading...</p>)
        return (
          <form
            onSubmit={onSubmit(signin, 'signin')}
          >
            <AuthForm>
              <div>
                <div id="authentication-form">
                  <div id="form-body">
                    <h1 id="form-header">Welcome Back</h1>
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="auth-form-input"
                      placeholder="Email"
                      value={email}
                      autoComplete="email"
                      onChange={onChange}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="auth-form-input"
                      placeholder="Password"
                      value={password}
                      autoComplete="current-password"
                      onChange={onChange}
                      required
                    />
                    <div id="action-button-container">
                      <button type="submit" id="sign-up-button">Login</button>
                      <span
                        id="forgot-password"
                      >
                      <Link href="/requestreset">
                        <a>Forgot Password?</a>
                      </Link>
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </AuthForm>
          </form>)
      }}
    </Mutation>
  )
}

export default Signin;
