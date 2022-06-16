import * as C from "./style";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../styles/themes/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";

export const ThemeSwicther = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <C.BtnContainer>
        <div className="toggle-switch">
          <input
            onChange={() => {
              themeToggler();
              setIsChecked((prev) => !prev);
            }}
            type="checkbox"
            checked={isChecked}
          />
          <div className="round-button">
            <div></div>
            <div></div>
            <div></div>
            <div className="button-body"></div>
          </div>
        </div>
      </C.BtnContainer>
    </ThemeProvider>
  );
};
