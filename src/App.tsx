import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Home from "./Pages/Home";
import Skill from "./Pages/Skiil";
import Project from "./Pages/Project";
import About from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          darkMode ? "bg-[#121212] text-white" : "bg-white text-black"
        } font-Nunito transition-colors duration-300`}
      >
        <div className="sticky top-0 z-50">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="flex-grow px-8">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/skill" element={<Skill darkMode={darkMode} />} />
            <Route path="/project" element={<Project darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
          </Routes>
        </div>
        <div className="sticky bottom-0 z-50">
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </Router>
  );
}

export default App;
