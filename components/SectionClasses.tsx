import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

import { Card, CardBody, CardTitle } from "./styled components/card";
import { SectionBlock } from "./styled components/div";
import { H2 } from "./styled components/h1";
import { Image } from "./styled components/image";
import { UnderlinedLink } from "./styled components/link";
import { TextCard } from "./styled components/text";
import { gray } from "./styled components/variables";

const SectionClasses = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0.5, 1], ["1%", "-25%"]);
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.95, 1.05, 0.95]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <SectionBlock background={`${gray}`} ref={targetRef}>
      <H2 ref={ref} style={{ scale, y }}>
        Discover our classes
      </H2>
      <Card ref={ref} style={{ scale, y }}>
        <CardTitle>Personal Training</CardTitle>
        <CardBody width={100}>
          <Image
            src="/assets/Personal_Training.jpg"
            alt="personal training"
            loading="lazy"
          />
          <TextCard>
            Achieve your fitness goals with personalized training tailored to
            you and guided by an experienced trainer.
          </TextCard>
          <UnderlinedLink to={""}>Kliknij mnie</UnderlinedLink>
        </CardBody>
      </Card>
      <Card ref={ref} style={{ scale, y }}>
        <CardTitle>Yoga Classes</CardTitle>
        <CardBody width={100}>
          <Image
            src="/assets/Yoga_Classes.jpg"
            alt="personal training"
            loading="lazy"
          />
          <TextCard>
            Embark on a journey to wellness with personalized yoga sessions
            crafted for you, led by a seasoned instructor.
          </TextCard>
          <UnderlinedLink to={""}>Kliknij mnie</UnderlinedLink>
        </CardBody>
      </Card>
      <Card ref={ref} style={{ scale, y }}>
        <CardTitle>Stretching</CardTitle>
        <CardBody width={100}>
          <Image
            src="/assets/Stretching.jpg"
            alt="personal training"
            loading="lazy"
          />
          <TextCard>
            Enhance your flexibility and well-being with customized stretching
            sessions designed for you.
          </TextCard>
          <UnderlinedLink to={""}>Kliknij mnie</UnderlinedLink>
        </CardBody>
      </Card>
      <Card ref={ref} style={{ scale, y }}>
        <CardTitle>Zumba</CardTitle>
        <CardBody width={100}>
          <Image
            src="/assets/Zumba.jpg"
            alt="personal training"
            loading="lazy"
          />
          <TextCard>
            Osiągnij cele fitness z treningiem personalnym dostosowanym do
            Ciebie i prowadzonym przez doświadczonego trenera.
          </TextCard>
          <UnderlinedLink to={""}>Kliknij mnie</UnderlinedLink>
        </CardBody>
      </Card>
      <Card ref={ref} style={{ scale, y }}>
        <CardTitle>TRX</CardTitle>
        <CardBody width={100}>
          <Image src="/assets/TRX.jpg" alt="personal training" loading="lazy" />
          <TextCard>
            Osiągnij cele fitness z treningiem personalnym dostosowanym do
            Ciebie i prowadzonym przez doświadczonego trenera.
          </TextCard>
          <UnderlinedLink to={""}>Kliknij mnie</UnderlinedLink>
        </CardBody>
      </Card>
      <Card ref={ref} style={{ scale, y }}>
        <CardTitle>Fitness</CardTitle>
        <CardBody width={100}>
          <Image
            src="/assets/Fitness.jpg"
            alt="personal training"
            loading="lazy"
          />
          <TextCard>
            Osiągnij cele fitness z treningiem personalnym dostosowanym do
            Ciebie i prowadzonym przez doświadczonego trenera.
          </TextCard>
          <UnderlinedLink to={""}>Kliknij mnie</UnderlinedLink>
        </CardBody>
      </Card>
    </SectionBlock>
  );
};

export default SectionClasses;
