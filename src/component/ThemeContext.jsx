import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setDarkMode] = useState(true);
  function changethemeclick() {
    setDarkMode((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={{ isDark, changethemeclick }}>
      {children}
    </ThemeContext.Provider>
  );
}
