import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
