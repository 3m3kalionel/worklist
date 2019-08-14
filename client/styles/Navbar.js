import styled from 'styled-components';

const NavbarStyles = styled.div`
  div#navbar-container {
    background: #19B188;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    margin-bottom: 0;
    margin-top: 0;
  }

  #app-logo {
    margin-left: auto;
    margin-right: auto;
  }

  li {
    padding: 15px;
    color: #fff;
    font-size: 24px;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 17px;
  }

  li button:hover {
    cursor: pointer;
    background: #006a4e;
    border-radius: 3px;
  }
`;

export default NavbarStyles;
