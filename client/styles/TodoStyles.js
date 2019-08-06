import styled from 'styled-components';

const TodoStyles = styled.div`
  input {
    border: none;
  }
  input:focus {
    outline: none;
  }

  .task-container {
    position: relative;
  }

  .task-container:hover .icon {
    display: block;
  }

  .checkbox-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 40px;
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .task-checkbox {
    position: absolute;
    left: 30px;
    top: 2px;
  }

  .icon {
    position: absolute;
    display: none;
    color: #fff;
    margin-top: 4px;
    right: 5px;
    top: 3px;
  }

  .task-input-container {
    padding: 5px 45px 5px 55px;
  }

  .task-input-container input {
    text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
  }

  .task-input-container:focus-within {
    border-top: 1px solid ${props => props.theme.paletteGray200};
    border-bottom: 1px solid ${props => props.theme.paletteGray200}
  }

  .task-input {
    width: 100%;
    font-size: 16px;
  }
`;

export default TodoStyles;
