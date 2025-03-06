import "./App.css";
import ExpertiseText from "./components/ExpertiseText";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import BannersSection from "./sections/BannersSection";
import { Landing } from "./sections/Landing";
import NumbersSection from "./sections/NumbersSection";
import PlansSection from "./sections/PlansSection";
import WorkingWithSection from "./sections/WorkingWithSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <BannersSection />
      <WorkingWithSection />

      <NumbersSection />

      <ExpertiseText />
      <PlansSection />
    </>
  );
};

export default App;
