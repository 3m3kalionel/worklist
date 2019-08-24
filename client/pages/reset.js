import React from 'react';

import ResetPassword from '../components/ResetPassword/ResetPassword';
import ResetPasswordStyles from '../styles/ResetPasswordStyles';

const ForgotPassword = (props) => (
  <ResetPasswordStyles>
    <ResetPassword resetToken={props.query.resetToken} />
  </ResetPasswordStyles>
);

export default ForgotPassword;
