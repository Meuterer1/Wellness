import React from "react";

import { faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ColumnDiv, Div, SectionBlock } from "./styled components/div";
import { SmallHeadline } from "./styled components/h1";
import { SmallListItem, UnorderedList } from "./styled components/list";
import { Table, TableData } from "./styled components/table";
import { PrimaryText, SmallListItemText } from "./styled components/text";
import { black, white } from "./styled components/variables";

const Footer = () => {
  return (
    <footer>
      <SectionBlock background={black}>
        <Div>
          <SmallHeadline color={white}>About Us</SmallHeadline>
          <PrimaryText color={white}>
            At FitZen, we believe in the transformative power of holistic
            fitness, blending the ancient wisdom of yoga with modern fitness
            techniques to help you achieve balance, strength, and serenity.
            Established with a passion for promoting overall well-being, we
            offer personalized training experiences tailored to your unique
            journey.
          </PrimaryText>
        </Div>
        <ColumnDiv>
          <SmallHeadline color={white}>Opening hours</SmallHeadline>
          <Table>
            <tbody>
              <tr>
                <TableData>Mon - Fri:</TableData>
                <TableData>09:00 - 21:00</TableData>
              </tr>
              <tr>
                <td>Sat: </td>
                <td>10:00 - 20:00</td>
              </tr>
              <tr>
                <td>Sun: </td>
                <td>CLOSED</td>
              </tr>
            </tbody>
          </Table>
        </ColumnDiv>
        <ColumnDiv>
          <SmallHeadline color={white}>Contact</SmallHeadline>
          <UnorderedList>
            <SmallListItem>
              <FontAwesomeIcon icon={faPhone} color={white} />
              <SmallListItemText color={white}>
                (212) 260-4666
              </SmallListItemText>
            </SmallListItem>
            <SmallListItem>
              <FontAwesomeIcon icon={faMapLocationDot} color={white} />
              <SmallListItemText color={white}>
                5 Bleecker St #1, <br /> 10012 New York, <br /> North Dakota
              </SmallListItemText>
            </SmallListItem>
          </UnorderedList>
        </ColumnDiv>
      </SectionBlock>
    </footer>
  );
};

export default Footer;
