import React from 'react';

export const themeContext = React.createContext();

const colors = {
  primary: '#252f3f',
  secondary: '#161d2e',
  text: '#c7cbd1',
};

export const ThemeProvider = ({ children }) => {
  return (
    <themeContext.Provider value={{ colors }}>{children}</themeContext.Provider>
  );
};
