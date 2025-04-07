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
import Plans from "./pages/plans/Plans";
import GrowthPackage from "./pages/plans/GrowthPackage";
import Contact from "./pages/Contact";
import DynamicBlogPage from "./pages/blogs/DynamicBlogPage";
import BlogsMainPage from "./pages/blogs/BlogsMainPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogsMainPage />} />
        <Route path="/blogs/:pageId" element={<DynamicBlogPage />} />
        <Route path="/growth-package" element={<GrowthPackage />} />

        <Route path="/projects/creative-pulse" element={<CreativePulse />} />

        <Route path="/projects/:pageId" element={<DynamicProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
};

export default App;
