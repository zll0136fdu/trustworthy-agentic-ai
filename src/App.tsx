import { useEffect } from "react";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tracks from "./sections/Tracks";
import Dates from "./sections/Dates";
import CFP from "./sections/CFP";
import Program from "./sections/Program";
import Organization from "./sections/Organization";
import Footer from "./sections/Footer";
import ParticleCanvas from "./components/ParticleCanvas";
import "./App.css";

function App() {
  useEffect(() => {
    // Update CSS custom properties for liquid glass mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--pointer-x", `${x}%`);
      document.documentElement.style.setProperty("--pointer-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A1120] text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Tracks />
        <Dates />
        <CFP />
        <Program />
        <Organization />
      </main>

      <Footer />
    </div>
  );
}

export default App;
