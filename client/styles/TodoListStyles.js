import styled from 'styled-components';

import Todo from '../components/Todo';

const TodoListStyles = styled.div`
  input {
    color: ${props =>  props.theme.black};
    background: #fff;
  }

  #todo-list-container {
    border: 1px solid ${props => props.theme.paletteGray200};
    border-radius: 8px;
    /* max-width: 240px; */
    max-width: 600px;
    margin: 16px;
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
