import React, {createContext, useState, useEffect, useContext} from "react";
import {useColorScheme} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {appModeCreators} from "../redux/actions/app-mode/app-mode.action";

interface IThemeContext {
  theme: any;
  toggleTheme: any;
}
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<string>(colorScheme || "light");

  const {appMode} = useSelector((state: any) => state.appMode);
  const dispatch = useDispatch();

  useEffect(() => {
    getTheme();
  }, [appMode]);

  const getTheme = async () => {
    try {
      if (appMode) {
        setTheme(appMode);
      }
    } catch (error) {
      console.log("Error loading theme:", error);
    }
  };

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme);
    }
  }, [colorScheme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    dispatch(appModeCreators.setAppMode(newTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
