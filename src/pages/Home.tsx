import React from "react";

import { Landing } from "../sections/Landing";
import BannersSection from "../sections/BannersSection";
import WorkingWithSection from "../sections/WorkingWithSection";
import NumbersSection from "../sections/NumbersSection";
import ExpertiseText from "../components/ExpertiseText";
import PlansSection from "../sections/PlansSection";
import { BoldIdeasSection } from "../sections/BoldIdeasSection";
import LatestTipsSection from "../sections/LatestTipsSection";
import MovingTextComponent from "../components/MovingTextComponent";
import ContactComponent from "../components/ContactComponent";
import "../App.css";
import AboutUsComponent from "../components/AboutUsComponent";
import AnimatedImageGrid from "../components/AnimatedImageGrid";
const Home: React.FC = () => {
  return (
    <div className="">
      <Landing />

      <div className=" flex flex-col sm:hidden pt-5 relative bg-black w-[80vw] m-auto z-50">
        <AboutUsComponent />
        <AnimatedImageGrid />
      </div>
      <BannersSection
        className="w-[100vw] "
        subClassName=" w-[90vw] sm:w-[75vw] flex flex-wrap h-[60vh] sm:h-[80vh] "
      />
      <WorkingWithSection />

      <NumbersSection />

      <ExpertiseText />
      <PlansSection />
      <BoldIdeasSection />
      <LatestTipsSection />
      <MovingTextComponent />

      <ContactComponent />
    </div>
  );
};

export default Home;
