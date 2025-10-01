import { Routes, Route } from "react-router-dom";
import DevErrorBoundary from "./components/DevErrorBoundary.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import About from "./pages/AboutPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="nav__spacer" />
      
      <ScrollToTop />
      <ScrollToHash />
      <DevErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </DevErrorBoundary>
      <Footer />
    </>
  );
}
