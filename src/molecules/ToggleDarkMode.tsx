import React from "react";

import { Button } from "~/atoms/Button";

export const ToggleDarkMode = () => {
  const isDarkMode = false;

  const handleToggleDarkMode = () => {
    // eslint-disable-next-line no-console
    console.log("Darkmode toggled");
  };

  return (
    <Button onClick={handleToggleDarkMode}>
      {isDarkMode ? "It's dark mode" : "It's light mode"}
    </Button>
  );
};
