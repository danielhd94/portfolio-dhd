import React, { createContext, useState, useContext, useMemo, ReactNode } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleColorMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleColorMode: () => { },
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const contextValue = useMemo(() => {
    const toggleColorMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    return {
      isDarkMode,
      toggleColorMode,
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};
