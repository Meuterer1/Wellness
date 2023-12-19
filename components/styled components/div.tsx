import { motion } from "framer-motion";
import styled from "styled-components";
import { orange, white } from "./variables";

interface DivProps {
  background: string;
}

export const Div = styled.div`
  padding-bottom: 2rem;
  position: relative;
  text-align: center;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const DivRight = styled(Div)`
  @media (min-width: 900px) {
    position: absolute;
    top: 15%;
    right: 0;
  }
`;

export const DivOverlayed = styled(Div)`
  background: url("/assets/header_main_page.jpg") no-repeat;
  background-size: cover;
  background-position: -1000px 0;
  color: ${white};
  min-height: 100sh;
  width: 100%;

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    filter: blur(1px);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  @media (min-width: 870px) {
    background-position: -700px 0;
  }

  @media (min-width: 1075px) {
    background-position: 0;
  }
`;

export const Tail = styled.section`
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  justify-content: center;
  width: 7rem;
  height: 9rem;
  background-color: ${orange};
  padding: 1.5rem;
  border-radius: 30px;
  margin-bottom: 2.5rem;

  @media (min-width: 480px) {
    margin: 2.5rem;
  }

  @media (min-width: 640px) {
    width: 9rem;
    height: 11rem;
  }

  @media (min-width: 815px) {
    margin: 0 0 2.5rem 0;
  }

  @media (min-width: 1400px) {
    width: 11rem;
    height: 13rem;
  }
`;

export const SectionBlock = styled(motion.div)<DivProps>`
  background: ${(props) => props.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2.5rem 0 0 0;
  position: relative;

  @media (min-width: 476px) {
  }

  @media (min-width: 700px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1385px) {
  }
`;

export const ColumnDiv = styled(Div)`
  align-content: end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: start;
  transition: all 1s linear;
  width: 100%;

  @media (min-width: 700px) {
    width: 45%;
  }

  @media (min-width: 900px) {
    width: 25%;
  }

  @media (min-width: 1385px) {
  }
`;
