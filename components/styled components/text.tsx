import { motion } from "framer-motion";
import styled from "styled-components";
import { black, logoFont, orange, primaryFont } from "./variables";

interface TextProps {
  color?: string;
}

export const Text = styled(motion.p)<TextProps>`
  color: ${((props) => props.color) || black};
  font-family: ${primaryFont};
  font-size: 2rem;
  font-weight: 300;
  padding: 2rem 3rem;
  position: relative;
  z-index: 1;

  @media (min-width: 640px) {
    font-size: 3rem;
    padding: 3rem 5rem;
  }

  @media (min-width: 720px) {
    font-weight: 500;
    padding: 3rem 10rem;
  }
`;

export const TextTail = styled(Text)`
  color: ${black};
  padding: 0;
  font-weight: 500;
`;

export const PrimaryText = styled(Text)`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1rem 2rem;
  text-align: justify;
`;

export const ListItemText = styled(PrimaryText)`
  padding: 1rem 2rem 0 0;
`;

export const SmallListItemText = styled(PrimaryText)`
  padding: 0 0 0 1rem;
`;

export const TextCard = styled(PrimaryText)`
  font-style: italic;
  padding: 1rem 1.5rem;
  text-align: center;
`;

export const Logo = styled(Text)`
  color: ${orange};
  font-family: ${logoFont};
  font-size: 2.5rem;
  padding: 1rem 0 0 1rem;

  @media (min-width: 767px) {
    padding-top: 0;
  }
`;
