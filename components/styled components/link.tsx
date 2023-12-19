import { Link } from "react-router-dom";
import styled from "styled-components";
import { gray, orange, primaryFont, white } from "./variables";

interface LinkProps {
  align?: string;
}

export const PrimaryLink = styled(Link)<LinkProps>`
  color: ${gray};
  font-family: ${primaryFont};
  font-size: 1.5rem;
  line-height: 3rem;
  padding-right: 3rem;
  text-align: ${((props) => props.align) || "center"};
  text-decoration: none;
  z-index: 2;

  &:hover {
    color: ${white};
  }
`;

export const UnderlinedLink = styled(PrimaryLink)`
  position: relative;
  padding-right: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    height: 1.5px;
    background-color: ${orange};
    transform: translateX(200%);
  }

  &:hover {
    color: ${orange};
  }
`;
