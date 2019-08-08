import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Meta from "./Meta";

const theme = {
  black: "#000",
  white: "#fff",
  paletteRed: "#f28b82",
  paletteOrange: "#fbbc04",
  paletteYellow: "#fff475",
  paletteGreen: "#ccff90",
  paletteTeal: "#a7ffeb",
  paletteBlue: "#cbf0f8",
  paletteDarkBlue: "#aecbfa",
  palettePurple: "#d7aefb",
  paletteBrown: "#e6c9a8",
  palettePink: "#fdcfe8",
  paletteGray: "#e8eaed",
  paletteGray200: "#c4c4c4",
  boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  authFormBoxShadow:
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  maxWidth: "600px",
  offWhite: "#EDEDED",
  offWhite2: "#FAFAFA",
  darkGreen: "#19B188"
};

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};

  align-items: flex-start;
  box-sizing: border-box;
  height: 100vh;
`;

const PageContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

injectGlobal`
  html {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <PageContent>{this.props.children}</PageContent>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
