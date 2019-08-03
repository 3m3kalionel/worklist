import styled from 'styled-components';

const AuthPageTabStyles = styled.div`
  #tab-headers {
    display: flex;
    width: 100%;
    height: 40px;
    max-width: 600px;
    position: absolute;
  }

  #signup-tab {
    background: ${props => props.page === 'signup' ? '#19B188' : '#425359'};
    display: flex;
    justify-content: center;
    flex-grow: 1;
    color: white;
    align-items: center;
    border-top-left-radius: 3px;
  }

  #login-tab {
    background: ${props => props.page === 'signin' ? '#19B188' : '#425359'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: white;
    border-top-right-radius: 3px;
  }

  .tab {
    cursor: pointer;
  }
`;

export default AuthPageTabStyles;
