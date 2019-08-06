import React from 'react';
import ReactTooltip from 'react-tooltip'

import TodoListFooterStyles from '../styles/TodoListFooterStyles';

const TodoListFooter = ({ query }) => {
  const colors = [
    'white',
    'paletteRed',
    'paletteOrange',
    'paletteYellow',
    'paletteGreen',
    'paletteTeal',
    'paletteBlue',
    'paletteDarkBlue',
    'palettePurple',
    'paletteBrown',
    'palettePink',
    'paletteGray',
  ];

  return (
    <TodoListFooterStyles>
      <div id="todo-list-footer-container">
        <div id="visibility-toggle-container">
          <div id="todo-list-footer-icons-container">
            <span className="footer-icon" data-tip="emeka" place="bottom">
              b
              <ReactTooltip />
            </span>

            <div
              id="color-palette-icon-container"
              data-tip="change-color"
              place="bottom"
            >
              c
              <ReactTooltip />
              {
                <span id="color-palette-container">
                {
                  colors.map((color, i) => (
                    <div className={`color-palette ${color}`} key={i}></div>
                  ))
                  }
                </span>
              }
            </div>
            <span className="footer-icon" data-tip="delete" place="bottom">
              d
              <ReactTooltip />
            </span>
          </div>
          <div id="close-button-container" className="footer-icon">Close</div>
        </div>
      </div>
    </TodoListFooterStyles>
  );
}

export default TodoListFooter;
