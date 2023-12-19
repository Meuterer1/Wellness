import { motion } from "framer-motion";
import styled from "styled-components";

import { orange, primaryFont, white } from "./variables";

export const Button = styled(motion.button)`
  background-color: ${orange};
  border: none;
  border-radius: 50px;
  color: ${white};
  font-family: ${primaryFont};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  position: relative;
  text-transform: uppercase;

  &:hover {
    background-color: transparent;
    border: 1px solid ${orange};
    color: ${orange};
    cursor: pointer;
  }

  @media (min-width: 474px) {
    padding: 0.5rem 1.5rem;
  }

  @media (min-width: 640px) {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${orange};
  color: ${orange};

  &:hover {
    background-color: ${orange};
    color: ${white};
  }
`;

export const NoBorderButton = styled(TransparentButton)`
  border: none;
  font-size: 2rem;
  padding: 0;

  &:focus {
    background-color: transparent;
  }
`;
