import React from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';

import AuthFormStyles from '../../styles/AuthFormStyles';
import WithForm from '../HOC';

import SIGN_UP_MUTATION from '../../graphql/mutations/Signup';

import CURRENT_USER_QUERY from '../../graphql/queries/CurrentUser';

const Signup = props => {
  const { onChange, onSubmit, onError, values } = props;
  const { username, email, password, phoneNumber } = values;

  return (
    <Mutation
      mutation={SIGN_UP_MUTATION}
      variables={values}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signup, { error, loading }) => (
        <form
          data-testid="form"     
          onSubmit={onSubmit(signup, 'signup')}
        >
          <AuthFormStyles>
            <div id="authentication-form">
              <div id="form-body">
                {error && onError(error)}
                {props.children}
                <h1 id="form-header">Sign Up For Free</h1>
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  type="text"
                  className="auth-form-input"
                  placeholder="Username"
                  value={username}
                  autoComplete="username"
                  onChange={onChange}
                  required
                />
                <label htmlFor="phoneNumber">Telephone</label>
                <input
                  name="phoneNumber"
                  type="number"
                  className="auth-form-input"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  autoComplete="tel"
                  onChange={onChange}
                  required
                />
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
                  <button
                    type="submit"
                    id="sign-up-button"
                    disabled={loading}
                  >
                    Sign Up
                  </button>
                  <span
                    id="forgot-password"
                  >
                    <Link href="/forgotpassword">
                      <a>Forgot Password?</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </AuthFormStyles>
        </form>
      )}
    </Mutation>
  )
}

export default WithForm(Signup);
