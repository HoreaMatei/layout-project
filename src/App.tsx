import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { Landing } from "./sections/Landing";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
};

export default App;
