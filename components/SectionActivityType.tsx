import React from "react";

import { Div, SectionBlock } from "./styled components/div";
import { H2 } from "./styled components/h1";
import { AbsoluteImage, VerticalImage } from "./styled components/image";
import { ListItem, OrderedList } from "./styled components/list";
import { ListItemText } from "./styled components/text";
import { white } from "./styled components/variables";

const SectionActivityTypes = () => {
  return (
    <SectionBlock background={`${white}`}>
      <H2>Train however you like</H2>
      <Div>
        <VerticalImage src="./assets/Training_Solo.jpg" />
        <AbsoluteImage src="./assets/GYM.jpg" />
      </Div>
      <Div>
        <OrderedList>
          <ListItem>
            Full-time classes
            <ListItemText>
              Engage in our immersive full-time workout sessions, designed to
              keep you energized and motivated throughout your fitness journey.
            </ListItemText>
          </ListItem>
          <ListItem>
            Solo classes
            <ListItemText>
              Experience personalized training tailored to your individual goals
              with our dedicated solo sessions, ensuring a focused and effective
              workout routine.
            </ListItemText>
          </ListItem>
          <ListItem>
            On-line classes
            <ListItemText>
              Stay connected and committed to your fitness goals with our
              convenient online workout sessions, providing flexibility and
              guidance for your training, wherever you are.
            </ListItemText>
          </ListItem>
        </OrderedList>
      </Div>
    </SectionBlock>
  );
};

export default SectionActivityTypes;
