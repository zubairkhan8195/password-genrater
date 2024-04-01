import React, { useState } from "react";

function ToggleBtn() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const [isLightMode, setIsLightMode] = useState(true);

  // const handleLightSliderClick = () => {
  //   setIsDarkMode(false);
  //   const html = document.querySelector("html");
  //   html.classList.remove("dark");
  // };
  // const handleDarkSliderClick = () => {
  //   setIsDarkMode(true);
  //   const html = document.querySelector("html");
  //   html.classList.add("dark");
  // };

  // const toggleSwitch = () => {
  //   setIsChecked(!isChecked);
  // };
  return (
    <>
      <div className="relative inline-block m-10">
        {/* <input
          className={`w-14 h-[26px] cursor-pointer rounded-full outline-none duration-200 bg-white ${
            isDarkMode ? "bg-white" : "bg-[#bbb6b0]"
          }`}
          value={isDarkMode}
          onClick={handleLightSliderClick}
        /> */}
        {/* <span
          className={`w-5 h-5 absolute top-1/2 -translate-y-1/2 duration-200s bg-[#bbb6b0] left-1 rounded-full ${
            isDarkMode
              ? "transform translate-x-[27px] bg-blue-600"
              : "bg-[#bbb6b0]"
          }`}
        /> */}
      </div>
    </>
  );
}

export default ToggleBtn;
