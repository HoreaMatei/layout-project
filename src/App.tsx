import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import BannersSection from "./sections/BannersSection";
import { Landing } from "./sections/Landing";
import NumbersSection from "./sections/NumbersSection";
import WorkingWithSection from "./sections/WorkingWithSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <BannersSection />
      <WorkingWithSection />

      <NumbersSection />
      <WorkingWithSection />
    </>
  );
};

export default App;
