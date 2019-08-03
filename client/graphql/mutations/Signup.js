import gql from 'graphql-tag';

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $username: String!,
    $email: String!,
    $phoneNumber: String!,
    $password: String!,
  ) {
    signup(
      username: $username,
      email: $email,
      phoneNumber: $phoneNumber,
      password: $password
    ) {
      id
      email
      username
    }
  }
`;

export default SIGN_UP_MUTATION;
