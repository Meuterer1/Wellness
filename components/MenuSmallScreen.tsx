import React, { useState } from "react";

import { NoBorderButton } from "./styled components/button";
import { ColumnDiv } from "./styled components/div";
import { PrimaryLink } from "./styled components/link";
import { Nav } from "./styled components/nav";
import { Logo } from "./styled components/text";

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./styled components/menu";

const MenuSmallScreen = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuButton = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Nav>
      <Logo>FitZen</Logo>
      <NoBorderButton onClick={handleMenuButton}>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </NoBorderButton>

      {isMenuActive && (
        <Menu>
          <NoBorderButton onClick={handleMenuButton}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" />
          </NoBorderButton>
          <ColumnDiv>
            <PrimaryLink to={"#"} align={"end"}>
              Home
            </PrimaryLink>
            <PrimaryLink to={"#"}>Account</PrimaryLink>
            <PrimaryLink to={"#"}>Classes</PrimaryLink>
          </ColumnDiv>
        </Menu>
      )}
    </Nav>
  );
};

export default MenuSmallScreen;
