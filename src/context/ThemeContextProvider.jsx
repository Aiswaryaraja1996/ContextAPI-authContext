import React, { useState } from "react";
import { themes } from "../styles";

export const ThemeContext = React.createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const themeData = themes;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={[{ theme, themeData }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
