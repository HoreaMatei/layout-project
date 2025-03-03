import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { StreamlinedExperience } from "./components/StreamlinedExperience";
import About from "./sections/About";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <StreamlinedExperience />
    </>
  );
};

export default App;
