import "./App.css";
import AnimatedImageGrid from "./components/AnimatedImageGrid";

import ContactComponent from "./components/ContactComponent";
import ExpertiseText from "./components/ExpertiseText";

import MovingTextComponent from "./components/MovingTextComponent";
import Navbar from "./components/Navbar";
import BannersSection from "./sections/BannersSection";
import { BoldIdeasSection } from "./sections/BoldIdeasSection";
import { Landing } from "./sections/Landing";
import LatestTipsSection from "./sections/LatestTipsSection";
import NumbersSection from "./sections/NumbersSection";
import PlansSection from "./sections/PlansSection";
import WorkingWithSection from "./sections/WorkingWithSection";

const App: React.FC = () => {
  return (
    <div className="relative text-white">
      <Navbar />
      <Landing />
      <BannersSection />
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

export default App;
