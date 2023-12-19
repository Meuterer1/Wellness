import React from "react";

import {
  Button,
  TransparentButton,
} from "../components/styled components/button";
import {
  DivOverlayed,
  SectionBlock,
  Tail,
} from "../components/styled components/div";
import { SmallImage } from "../components/styled components/image";
import { Text, TextTail } from "../components/styled components/text";
import { H1 } from "./styled components/h1";

const Header = () => {
  const primaryVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2.5,
      },
    },
  };
  const handleButtonOnClick = () => {
    console.log("kliknięte");
  };

  return (
    <DivOverlayed>
      <H1 variants={primaryVariants} initial="hidden" animate="visible">
        It's your time! <br /> Thanks to combined membership
      </H1>
      <Text variants={primaryVariants} initial="hidden" animate="visible">
        Train whenever you want, wherever you want – indoors, outdoors, and
        online. Enjoy the most flexible sports and wellness offerings in Europe!
      </Text>
      <Button onClick={handleButtonOnClick} whileHover={{ scale: 1.1 }}>
        Find Us
      </Button>
      <TransparentButton>Check Options</TransparentButton>
      <SectionBlock background="transparent">
        <Tail>
          <SmallImage src="assets/icons/header_yoga-pose.png" alt="yoga" />
          <TextTail>Yoga</TextTail>
        </Tail>
        <Tail>
          <SmallImage src="assets/icons/header_strength.png" alt="strength" />
          <TextTail>Strength</TextTail>
        </Tail>
        <Tail>
          <SmallImage src="assets/icons/header_fitness.png" alt="fitness" />
          <TextTail>Fitness</TextTail>
        </Tail>
        <Tail>
          <SmallImage
            src="assets/icons/header_stretching.png"
            alt="stretching"
          />
          <TextTail>Stretch</TextTail>
        </Tail>
      </SectionBlock>
    </DivOverlayed>
  );
};

export default Header;
