import React from "react";

import { Button } from "./styled components/button";
import { Div, SectionBlock } from "./styled components/div";
import { H2 } from "./styled components/h1";
import { MediumImage } from "./styled components/image";
import { PrimaryText } from "./styled components/text";
import { white } from "./styled components/variables";

const SectionTrainers = () => {
  return (
    <SectionBlock background={white}>
      <Div>
        <H2>Meet our trainers!</H2>
        <PrimaryText>
          Meet our dedicated team of certified fitness trainers who are
          passionate about helping you achieve your fitness goals. With
          personalized workout plans and expert guidance, our trainers are
          committed to guiding you on your journey to a healthier, stronger you.
        </PrimaryText>
        <Button>Meet us</Button>
      </Div>

      <Div>
        <MediumImage src="/assets/Ann.jpg" />
        <MediumImage src="/assets/Mark.jpg" />
        <MediumImage src="/assets/John.jpg" />
        <MediumImage src="/assets/Joana.jpg" />
      </Div>
    </SectionBlock>
  );
};

export default SectionTrainers;
