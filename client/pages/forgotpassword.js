import React from 'react';
import { Mutation } from 'react-apollo';

import AuthForm from '../styles/AuthForm';
import { WithForm } from '../components/HOC';
import REQUEST_RESET_MUTATION from '../graphql/mutations/RequestReset';

const WrappedComponent = props => {
  const { onChange, onSubmit, onError, values } = props;
  const { email } = values;

  return (
    <Mutation
      mutation={REQUEST_RESET_MUTATION}
      variables={{ recipientEmail: email }}
    >
      {(requestResetPasswordLink, { error, loading}) => (
        <div>
          <form
            onSubmit={onSubmit(requestResetPasswordLink, 'requestreset')}
          >
            <AuthForm>
              <div>
                <div id="authentication-form">
                  <div id="form-body">
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
            </AuthForm>
          </form>
        </div>
      )}
    </Mutation>
  )
}

const RequestReset = WithForm(WrappedComponent);

export default () => (
  <div>
    <RequestReset initialState={{ email: "" }} />
  </div>
);
