import gql from 'graphql-tag';

const CREATE_TODOLIST_MUTATION = gql`
  mutation CREATE_TODOLIST_MUTATION(
    $title: String,
    $tasks: [CustomTodoMutationInput]
  ) {
  createTodoList(title: $title, tasks: $tasks) {
    id
    title
    isPinned
    tasks {
      id
      content
      isCompleted
    }
  }
  }
`;

 export default CREATE_TODOLIST_MUTATION;
