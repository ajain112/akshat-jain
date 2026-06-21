import { Routes, Route } from "react-router-dom";
import DevErrorBoundary from "./components/DevErrorBoundary.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import About from "./pages/AboutPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NotFound from "./pages/NotFound.jsx";
import Loader from "./components/loader.jsx";
import { useRef, useEffect } from "react";

export default function App() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      loaderRef.current?.finish();
    }, 3300); // lets your logo animation complete first

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Loader ref={loaderRef} />
      <Navbar />
      <div className="nav__spacer" />
      
      <ScrollToTop />
      <ScrollToHash />
      <DevErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DevErrorBoundary>
      <Footer />
    </>
  );
}
