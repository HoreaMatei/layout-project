import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Works from "./pages/works/Works";
import CreativePulse from "./projects/DynamicProjectsPage";
import DynamicProjectsPage from "./projects/DynamicProjectsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects/creative-pulse" element={<CreativePulse />} />
        {/* 
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/projects/:pageId" element={<DynamicProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
