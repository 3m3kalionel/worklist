import gql from 'graphql-tag';

const ALL_TODO_LISTS_QUERY = gql`
  query  {
    getTodoLists {
      id
      isPinned
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
`;

export default ALL_TODO_LISTS_QUERY;
