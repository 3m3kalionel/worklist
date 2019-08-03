import gql from 'graphql-tag';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($recipientEmail: String!) {
    requestResetPasswordLink(recipientEmail: $recipientEmail) {
      message
    }
  }
`;

export default REQUEST_RESET_MUTATION;
