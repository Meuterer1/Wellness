import styled from "styled-components";
import { headerFont } from "./variables";

export const OrderedList = styled.ol`
  list-style-type: decimal;
  margin-left: 1rem;
  margin-right: 0.5rem;
  padding-left: 4rem;
  text-align: left;

  @media (min-width: 900px) {
    margin-left: 2rem;
  }

  @media (min-width: 1250px) {
  }
`;

export const ListItem = styled.li`
  font-size: 2rem;
  font-family: ${headerFont};
  padding: 0.5rem 0;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 720px) {
    font-size: 3.5rem;
    padding-right: 5vw;
  }
`;

export const SmallListItem = styled(ListItem)`
  align-items: baseline;
  display: flex;
  font-size: 1.2rem;
`;

export const UnorderedList = styled.ul`
  margin-left: 1rem;
  margin-right: 0.5rem;
  padding-left: 1.2rem;
  text-align: left;

  @media (min-width: 900px) {
    margin-left: 2rem;
  }

  @media (min-width: 1250px) {
  }
`;
