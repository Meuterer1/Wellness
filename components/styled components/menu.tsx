import styled from "styled-components";
import { black, white } from "./variables";

export const Menu = styled.div`
  color: ${white};
  background-color: ${black};
  height: 100vh;
  left: 0;
  position: fixed;
  text-align: right;
  top: 0;
  transition: all 1s linear;
  width: 100%;
  z-index: 3;
`;
