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
  //   const date = new Date();
  //   const currentTime = date.getHours() + ":" + date.getMinutes();
  //   console.log(currentTime)
  const [mode, setMode] = useState(false);
  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <div className="mode-container">
      <div className="mode-container-icon" onClick={handleClick}>
        {mode ? <WbSunnyIcon /> : <DarkModeIcon />}
      </div>
    </div>
  );
}
