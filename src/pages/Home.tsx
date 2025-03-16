import React from "react";
import Navbar from "../components/Navbar";
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
const Home: React.FC = () => {
  return (
    <div className="">
      <Landing />
      <BannersSection
        className="w-[100vw]"
        subClassName="w-[75vw] flex flex-wrap h-[80vh] "
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
