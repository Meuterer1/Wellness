import { motion } from "framer-motion";
import styled from "styled-components";

import { black, gray, headerFont, primaryFont, white } from "./variables";

interface CardProps {
  animationDelay?: number;
  width: number;
}

export const Card = styled(motion.div)`
  background-color: ${gray};
  height: 550px;
  margin: 2rem;
  width: calc(90% - 4rem);

  -webkit-box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 1);

  @media (min-width: 480px) {
    height: 600px;
  }

  @media (min-width: 540px) {
    width: calc(80% - 4rem);
  }

  @media (min-width: 700px) {
    width: calc(50% - 4rem);
  }

  @media (min-width: 992px) {
    width: 25%;
  }

  @media (min-width: 1400px) {
  }
`;

export const CardTitle = styled.div`
  background-color: ${black};
  color: ${white};
  font-family: ${headerFont};
  font-size: 2rem;
  height: 15%;
  text-align: center;
  line-height: 4rem;
  width: 100%;
`;

export const CardBody = styled.div<CardProps>`
  background-color: ${white};
  display: flex;
  flex-direction: column;
  font-family: ${primaryFont};
  justify-content: space-between;
  height: calc(85% - 1.5rem);
  text-align: center;
  padding-bottom: 1.5rem;
  width: ${(props) => props.width}%;
`;
