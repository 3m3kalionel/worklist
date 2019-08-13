import styled from 'styled-components';

const TodoListFooterStyles = styled.div`
  #todo-list-footer-container {
    border-bottom-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${props => props.theme.white};
  }

  div#visibility-toggle-container {
    visibility: ${props =>
      props.type === 'create-todo-list' ? 'visible' : 'hidden'};
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
  }

  .footer-button {
    display: flex;
    justify-content: center;
    border: none;
    margin-right: 15px;
    width: 60px;
    height: 20px;
  }

  .button-container {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
  }

  .footer-button:hover {
    background: ${props => props.theme.offWhite};
    cursor: pointer;
    border-radius: 3px;
  }

  #close-button-container {
    display: flex;
    align-items: center;
  }

  #create-button-container {
    margin-right: 8px;
  }
`;

export default TodoListFooterStyles;
