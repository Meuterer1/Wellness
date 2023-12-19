import React, { useEffect, useState } from "react";

import MenuBigScreen from "./MenuBigScreen";
import MenuSmallScreen from "./MenuSmallScreen";

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const isSmallScreen = windowWidth < 768;

  return <>{isSmallScreen ? <MenuSmallScreen /> : <MenuBigScreen />}</>;
};

export default Navigation;
