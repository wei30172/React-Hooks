import React, { useState, useContext, createContext } from "react";

export const ModeContext = createContext({
  darkMode: false,
});

export const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useModeContext = () => useContext(ModeContext);
