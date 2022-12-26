import { React } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Mode({onChange, theme}) {
  function handleChange(event){
    onChange()
  }

  return (
    <div className="mode-container">
      {theme ? (
        <div class="mode-container-tooltip">
          <div
            className="mode-container-icon"
            onClick={handleChange}
          >
            <WbSunnyIcon className="bounce" />
            <span className="mode-container-tooltiptext">Click Me to Switch<br />to Dark Mode</span>
          </div>
        </div>
      ) : (
        <div class="mode-container-tooltip">
          <div
            className="mode-container-icon"
            onClick={handleChange}
          >
            <DarkModeIcon className="bounce" />
            <span className="mode-container-tooltiptext">Click Me to Switch<br />to Light Mode</span>
          </div>
        </div>
      )}
    </div>
  );
}
