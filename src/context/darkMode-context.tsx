import { createContext, useState, ReactNode } from "react";

interface DarkModeContextType {
  theme: string;
  handleToggleTheme: () => void;
}

const defaultContextValue: DarkModeContextType = {
  theme: "light",
  handleToggleTheme: () => {},
};

export const darkModeContext =
  createContext<DarkModeContextType>(defaultContextValue);

const UseDarkModeContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <darkModeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </darkModeContext.Provider>
  );
};

export default UseDarkModeContext;
