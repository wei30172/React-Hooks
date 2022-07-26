import React from "react";
import { useModeContext } from "../../contexts/ModeContext";

const SwitchMode = () => {
  const { setDarkMode } = useModeContext();

  const handleDarkModeToggle = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return <h2 onClick={handleDarkModeToggle}>◑</h2>;
};

export default SwitchMode;
