import useTheme from "../../context/theme-context";

export const isDarkTheme = () => {
  const {theme}: any = useTheme();

  const isDarkTheme = theme === "dark";

  return isDarkTheme;
};
