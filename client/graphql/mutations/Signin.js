import gql from 'graphql-tag';

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      username
      authoredTodoLists {
        id
      }
      todoListsContributedTo {
        id
      }
    }
  }
`;

export default SIGN_IN_MUTATION
