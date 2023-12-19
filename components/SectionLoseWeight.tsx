import React from "react";

import { Button } from "./styled components/button";
import { DivRight, SectionBlock } from "./styled components/div";
import { H2 } from "./styled components/h1";
import { Image } from "./styled components/image";
import { TextCard } from "./styled components/text";
import { grayGradient } from "./styled components/variables";

const SectionLoseWeight = () => {
  return (
    <SectionBlock background={grayGradient}>
      <DivRight>
        <H2>Weight loss guaranteed!</H2>
        <TextCard>
          Many people struggle to find a balanced relationship between diet and
          exercise.
        </TextCard>
        <Button>Check all options</Button>
      </DivRight>
      <Image src="./assets/Lose_Weight.jpg" />
    </SectionBlock>
  );
};

export default SectionLoseWeight;
