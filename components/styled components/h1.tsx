import { motion } from "framer-motion";
import styled from "styled-components";

import { black, headerFont } from "./variables";

interface HeadlineProps {
  color?: string;
}

export const H1 = styled(motion.h1)<HeadlineProps>`
  color: ${((props) => props.color) || black};
  font-size: 3rem;
  font-family: ${headerFont};
  padding-top: 4rem;
  position: relative;
  z-index: 1;

  @media (min-width: 640px) {
    font-size: 4rem;
    padding: 4rem 3rem 0 3rem;
  }

  @media (min-width: 720px) {
    font-size: 6rem;
  }

  @media (min-width: 992px) {
    padding-top: 8rem;
  }
`;

export const H2 = styled(motion.h2)<HeadlineProps>`
  color: ${((props) => props.color) || black};
  box-sizing: border-box;
  font-size: 3rem;
  font-family: ${headerFont};
  padding: 2rem;
  text-align: center;
  width: 100%;

  @media (min-width: 640px) {
    font-size: 4rem;
  }

  @media (min-width: 720px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
  }
`;

export const H3 = styled(H2)`
  font-size: 2rem;
  padding: 2rem;
  text-align: start;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

  @media (min-width: 720px) {
    font-size: 4rem;
  }
`;

export const SmallHeadline = styled(H3)`
  font-size: 1.5rem;
  padding: 0 2rem 1rem 2rem;

  @media (min-width: 640px) {
    font-size: 2.2rem;
  }

  @media (min-width: 720px) {
    font-size: 3.2rem;
  }
`;
