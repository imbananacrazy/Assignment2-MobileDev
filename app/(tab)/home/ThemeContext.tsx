import React, { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ useTheme}: any) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = () => {
    setTheme (prev => (prev === "dark" ? "light" :"dark"));
  };
  return (
    <ThemeContext.Provider value ={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
