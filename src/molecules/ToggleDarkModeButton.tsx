import React from "react";

import { Button } from "~/atoms/Button";
import { scale } from "~/design";

export const ToggleDarkModeButton = () => {
  const darkModeEnabled = false;

  const handleDarkModeToggle = () => {
    console.log(
      `Sorry no darkmode implementation. 
      We shall do it later with reactive variable
      `,
    );
  };

  const ButtonText = () => (
    <>{darkModeEnabled ? "Disable Darkmode" : "Enable Darkmode"}</>
  );

  return (
    <Button
      success={darkModeEnabled}
      onClick={handleDarkModeToggle}
      css={{ minWidth: scale(30) }}
    >
      <ButtonText />
    </Button>
  );
};
