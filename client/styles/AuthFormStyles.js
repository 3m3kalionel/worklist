import styled from 'styled-components';

const AuthFormStyles = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  #authentication-form {
    max-width: 600px;
    min-width: 350px;
    padding: 20px;
    background: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    box-shadow: ${props => props.theme.authFormBoxShadow};
  }

  label {
    font-size: 12px;
  }

  #form-body {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  #success-message {
    align-self: center;
    color: ${props => props.theme.darkGreen}
  }

  #form-header {
    color: #000;
    align-self: center;
  }

  input {
    background: ${props => props.theme.white};
    border: 1px solid #868F94;
    height: 40px;
    color: #000;
    outline: none;
    border-radius: 3px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 10px;
    font-size: 16px;
  }

  input:focus {
    border: 1px solid ${props => props.theme.darkGreen};
  }

  .auth-form-input{
    width: 100%;
  }

  #action-button-container {
    align-self: flex-end;
    color: #fff;
  }

  #forgot-password:hover {
    color: ${props => props.theme.darkGreen};
    cursor: pointer;
  }

  #forgot-password {
    font-size: 14px;
    color: #000;
  }

  button#sign-up-button {
    align-self: flex-end;
    margin-right: 10px;
  }

  button {
    background: ${props => props.theme.darkGreen};
    border: none;
    height: 30px;
    border-radius: 2px;
  }

  button:hover {
    cursor: pointer;
    color: #fff;
  }

  button:disabled {
    color: ${props => props.paletteGray};

    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default AuthFormStyles;
