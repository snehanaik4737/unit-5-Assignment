import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider value={0}>{children}</ThemeContext.Provider>;
};
