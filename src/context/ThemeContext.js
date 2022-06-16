import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const SAVED_THEME = "savedTheme";

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const savedTheme = localStorage.getItem(SAVED_THEME) || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
