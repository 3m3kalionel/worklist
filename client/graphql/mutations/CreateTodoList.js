import gql from 'graphql-tag';

const CREATE_TODOLIST_MUTATION = gql`
  input tasksInput {
    isComplete: Boolean,
    content: String
  }

  mutation CREATE_TODOLIST_MUTATION(
    $title: String,
    $isPinned: Boolean,
    $tasks: [
      {
        isComplete: Boolean,
        content: String,
      }
    ]
  ) {
    createTodoList(title: $title, tasks: $tasks) {
      id
      title
      isPinned
      tasks {
        id
        content
        isComplete
      }
    }
  }
`;

export default CREATE_TODOLIST_MUTATION;
