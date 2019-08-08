import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.span`
  font-size: 16px;
  color: ${props => props.theme.white};
  align-self: center;
  margin-top: 15px;
  padding: 4px;
  background: red;
  border-radius: 3px;
`

const Error = ({ error }) => {
  if (!error || !error.message) return null;
  if (error && error.message.includes("unique constraint would be violated")) {
    if (error.message.split(' ').pop() === 'phoneNumber') {
      return (
        <ErrorStyle>
          {'phone number already in use'}
        </ErrorStyle>
      );
    }
    return (
      <ErrorStyle>
        {`${error.message.split(' ').pop()} already in use`}
      </ErrorStyle>
    )
  }
  return (
    <ErrorStyle>
      {error.message.replace('GraphQL error: ', '')}
    </ErrorStyle>
  );
}

export default Error;
