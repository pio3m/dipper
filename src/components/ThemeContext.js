import React, { createContext, useState, useContext } from "react";

// Stworzenie kontekstu
const ThemeContext = createContext();

// Dostawca kontekstu (Provider)
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Domyślnie jasny tryb

  // Funkcja do przełączania trybu
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Użycie kontekstu w dowolnym komponencie
export const useTheme = () => useContext(ThemeContext);
