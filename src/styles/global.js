import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.body}; 
    color: ${(props) => props.theme.font_color};
    transition: 0.5s;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}

  input{
    color: ${(props) => props.theme.font_color}
  }
  .border-gradient {

    border-image-source: ${(props) => props.theme.border_gradient}
  }
  .listItem{
    background: ${(props) => props.theme.background_color};
  }





  
`;
