import React from 'react';
import { Mutation } from 'react-apollo';

import AuthFormStyles from '../styles/AuthFormStyles';
import { WithForm } from './HOC';

import RESET_PASSWORD_MUTATION from '../graphql/mutations/ResetPassword';
import CURRENT_USER_QUERY from '../graphql/queries/CurrentUser';

const WrappedComponent = props => {
  const {
    onChange,
    onSubmit,
    onError,
    values,
    resetToken
  } = props;
  const { password, confirmPassword } = values;
  
  return (
    <Mutation
      mutation={RESET_PASSWORD_MUTATION}
      variables={{ resetToken, password, confirmPassword }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(resetPassword, { data, error, loading }) => (
        <form
          onSubmit={onSubmit(resetPassword, 'reset')}
        >
          <AuthFormStyles>
            <div>
              <div id="authentication-form">
                <div id="form-body">
                  {error && onError(error)}
                  {props.children}
                  <h1 id="form-header">Reset Password</h1>
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      className="auth-form-input"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      autoComplete="new-password"
                      onChange={onChange}
                      required
                    />
                  <div id="action-button-container">
                    <button type="submit" id="submit-button">Reset Password</button>
                  </div>
                </div>
              </div>
            </div>
          </AuthFormStyles>
        </form>
      )}
    </Mutation>
  )
}

const ResetPassword = WithForm(WrappedComponent);

export default (props) => (
  <div>
    <ResetPassword
      resetToken={props.resetToken}
      initialState={{ password: "", confirmPassword: "" }}
    />
  </div>
);
