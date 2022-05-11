import React, { createContext, useState, useEffect } from 'react';
import { IThemeContext } from '../../types';

const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultState = {
  dark: localStorage.getItem('feta_dark') === 'true' || getCurrentTheme(),
  sideBar: localStorage.getItem('feta_side') ? localStorage.getItem('feta_side') === 'true' : true,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);
  const [sideBar, setSideBar] = useState<boolean>(defaultState.sideBar);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
    localStorage.setItem('feta_sidebar', sideBar.toString());
  };

  const toggleDark = () => {
    setDark(!dark);
  };

  const HTML = document?.querySelector('html')?.classList;

  useEffect(() => {
    if (dark) {
      HTML?.add('dark');
      localStorage.setItem('feta_dark', 'true');
    } else {
      HTML?.remove('dark');
      localStorage.setItem('feta_dark', 'false');
    }
  }, [dark]);

  return <ThemeContext.Provider value={{ dark, toggleDark, sideBar, toggleSideBar }}>{children}</ThemeContext.Provider>;
};
