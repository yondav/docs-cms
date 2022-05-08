import React, { createContext, useState, useEffect } from 'react';

interface IThemeContext {
  dark: boolean;
  sideBar: boolean;
  toggleDark?: () => void;
  toggleSideBar?: () => void;
}

const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultState = {
  dark: localStorage.getItem('docs_dark') === 'true' || getCurrentTheme(),
  sideBar: localStorage.getItem('docs_side') ? localStorage.getItem('docs_side') === 'true' : true,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);
  const [sideBar, setSideBar] = useState(defaultState.sideBar);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const toggleDark = () => {
    setDark(!dark);
  };

  const HTML = document?.querySelector('html')?.classList;

  useEffect(() => {
    if (dark) {
      HTML?.add('dark');
      localStorage.setItem('dark', 'true');
    } else {
      HTML?.remove('dark');
      localStorage.setItem('dark', 'false');
    }
  }, [dark]);

  return <ThemeContext.Provider value={{ dark, toggleDark, sideBar, toggleSideBar }}>{children}</ThemeContext.Provider>;
};
