import { React, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const colorArray = [
  {
    id: "darkMode",
    background: "",
    dark: "",
    normal: "",
    light: "",
    subText: "",
    header: "",
    headerBoarder: "",
  },
  {
    id: "lightMode",
    background: "",
    dark: "",
    normal: "",
    light: "",
    subText: "",
    header: "",
    headerBoarder: "",
  },
];

export default function Mode() {
  const [mode, setMode] = useState(true); //true Is Light Mode, False is Dark Mode
  const handleClick = () => {
    setMode(!mode);
  };

  return (
    <div className="mode-container">
      {mode ? (
        <div class="mode-container-tooltip">
          <div
            className="mode-container-icon"
            onClick={handleClick}
          >
            <WbSunnyIcon className="bounce" />
            <span className="mode-container-tooltiptext">{`Click Me to Switch to ${mode ? `Light` : `Dark`} Mode`}</span>
          </div>
        </div>
      ) : (
        <div class="mode-container-tooltip">
          <div
            className="mode-container-icon"
            onClick={handleClick}
          >
            <DarkModeIcon className="bounce" />
            <span className="mode-container-tooltiptext">{`Click Me to Switch to ${mode ? `Light` : `Dark`} Mode`}</span>
          </div>
        </div>
      )}
    </div>
  );
}
