import React from 'react';
import ReactTooltip from 'react-tooltip'

import TodoListFooterStyles from '../styles/TodoListFooterStyles';

const TodoListFooter = ({ type, onCreate, hasContent, onCancel }) => (
    <TodoListFooterStyles type={type}>
      <div id="todo-list-footer-container">
        <div id="visibility-toggle-container">
          <div className="button-container">
            <button
              id="create-button-container"
              className="footer-button"
              disabled={!hasContent}
              onClick={onCreate}
            >
              Create
            </button>
            <button
              id="close-button-container"
              className="footer-button"
              disabled={!hasContent}
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </TodoListFooterStyles>
  );

export default TodoListFooter;