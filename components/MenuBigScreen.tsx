import React from "react";

import { PrimaryLink } from "./styled components/link";
import { Nav } from "./styled components/nav";
import { Logo } from "./styled components/text";

const MenuBigScreen = () => {
  return (
    <Nav>
      <Logo>FitZen</Logo>
      <PrimaryLink to={"#"}>Home</PrimaryLink>
      <PrimaryLink to={"#"}>Account</PrimaryLink>
      <PrimaryLink to={"#"}>Classes</PrimaryLink>
    </Nav>
  );
};

export default MenuBigScreen;
