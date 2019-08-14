import gql from 'graphql-tag';

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $resetToken: String!,
    $password: String!,
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken,
      password: $password,
      confirmPassword: $confirmPassword
    ) {
      id
      email
    }
  }
`;

export default RESET_PASSWORD_MUTATION;
