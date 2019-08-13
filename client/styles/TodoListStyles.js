import styled from 'styled-components';

const TodoListStyles = styled.div`
  input {
    color: ${props =>  props.theme.black};
    background: ${props => props.theme.white};
  }

  #todo-list-container,
  #create-todo-list-container {
    border: 1px solid ${props => props.theme.paletteGray200};
    border-radius: 8px;
    margin: 16px;
    background: ${props => props.theme.white}
  }

  #todo-list-container {
    max-width: 240px;
  }

  #create-todo-list-container {
    max-width: 600px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),
    0 2px 6px 2px rgba(60,64,67,0.149);

  }

  #todo-list-container:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }

  #todo-list-title-container {
    padding: 15px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    outline: none;
  }

  #todo-list-title:focus {
    outline: none;
  }

  #todo-list-title {
    width: 100%;
    font-size: 24px;
    border: none;
  }

  #pin-icon {
    width: 28px;
    color: #fff;
  }
`;

export default TodoListStyles;
