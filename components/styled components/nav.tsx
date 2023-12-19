import styled from "styled-components";
import { black900, white } from "./variables";

export const Nav = styled.nav`
  align-content: center;
  background: ${black900};
  color: ${white};
  display: flex;
  flex-wrap: wrap;
  height: 10vh;
  justify-content: space-between;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    background: radial-gradient(circle, #d7d5dc, #000f19);
    bottom: 0;
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
