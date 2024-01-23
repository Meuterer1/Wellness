import React from "react";

import SectionActivityTypes from "../components/SectionActivityType";
import SectionClasses from "../components/SectionClasses";
import SectionLoseWeight from "../components/SectionLoseWeight";
import SectionTrainers from "../components/SectionTrainers";

const MainPage = () => {
  return (
    <main>
      <SectionClasses />
      <SectionActivityTypes />
      <SectionLoseWeight />
      <SectionTrainers />
    </main>
  );
};

export default MainPage;
