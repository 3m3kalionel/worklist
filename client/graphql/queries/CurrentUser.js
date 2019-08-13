import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      id
      email
      authoredTodoLists {
        id
        title
        tasks {
          id
          content
          isCompleted
          belongsTo {
            id
            author {
              username
              email
            }
          }
        }
      }
    }
  }
`;

export default CURRENT_USER_QUERY;
