import styled from 'styled-components';

const TodoListFooterStyles = styled.div`
 #color-palette-icon-container {
    position: relative;
  }

   #color-palette-container {
    display: none;
  }

  #color-palette-icon-container:hover #color-palette-container {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    min-width: 108px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -100px;
    background: ${props => props.theme.white};
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }

  .color-palette {
    border-radius: 50%;
    margin-bottom: 5px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  .color-palette:hover {
    cursor: pointer;
  }

  #todo-list-footer-container {
    border-bottom-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${props => props.theme.white};
  }

  div#visibility-toggle-container {
    visibility: hidden;
    display: flex;
    width: 100%;
  }

   #todo-list-footer-icons-container {
    display: flex;
    flex-grow: 6;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
  }

  #close-button-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    color: ${props => props.theme.black};
  }

  .white {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.paletteGray};
    border-style: inset;
  }

  .paletteRed {
    background: ${props => props.theme.paletteRed};
  }

  .paletteOrange {
    background: ${props => props.theme.paletteOrange};
  }

  .paletteYellow {
    background: ${props => props.theme.paletteYellow};
  }

  .paletteGreen {
    background: ${props => props.theme.paletteGreen};
  }

  .paletteTeal {
    background: ${props => props.theme.paletteTeal};
  }

  .paletteBlue {
    background: ${props => props.theme.paletteBlue};
  }

  .paletteDarkBlue {
    background: ${props => props.theme.paletteDarkBlue};
  }

  .palettePurple {
    background: ${props => props.theme.palettePurple};
  }

  .paletteBrown {
    background: ${props => props.theme.paletteBrown};
  }

  .palettePink {
    background: ${props => props.theme.palettePink};
  }

  .paletteGray {
    background: ${props => props.theme.paletteGray};
  }
`;

export default TodoListFooterStyles;
