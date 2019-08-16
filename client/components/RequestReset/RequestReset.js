import React from 'react';
import { Mutation } from 'react-apollo';

import AuthFormStyles from '../../styles/AuthFormStyles';
import WithForm from '../HOC';
import REQUEST_RESET_MUTATION from '../../graphql/mutations/RequestReset';

const WrappedComponent = props => {
  const { onChange, onSubmit, onError, values = { email: ''} } = props;
  const { email } = values;

  return (
    <Mutation
      mutation={REQUEST_RESET_MUTATION}
      variables={{ recipientEmail: email }}
    >
      {(requestResetPasswordLink, { data, error, loading, called }) => (
          <form
            onSubmit={onSubmit(requestResetPasswordLink, 'requestreset')}
            data-testid="form"
          >
            <AuthFormStyles>
              <div>
                <div id="authentication-form">
                  <div id="form-body">
                    {error && onError(error)}
                    {props.children}
                    <div id="success-message">
                      {
                        !error && !loading && called &&
                        data.requestResetPasswordLink.message
                      }
                    </div>
                    <h1 id="form-header">Forgot Password ?</h1>
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
                    <div id="action-button-container">
                      <button
                        type="submit"
                        id="submit-button"
                        disabled={loading}
                      >
                        Send Reset Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AuthFormStyles>
          </form>
        )
      }
    </Mutation>
  )
}

export default WithForm(WrappedComponent);
