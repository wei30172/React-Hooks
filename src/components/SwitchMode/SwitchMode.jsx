import React from "react";
import { useModeContext } from "../../contexts/ModeContext";

const SwitchMode = () => {
  const { setDarkMode } = useModeContext();

  const handleDarkModeToggle = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <button onClick={handleDarkModeToggle}>
      <h1>◑</h1>
    </button>
  );
};

export default SwitchMode;
