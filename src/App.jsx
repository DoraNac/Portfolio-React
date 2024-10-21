import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import SpotlightEffect from "./components/SpotlightEffect";

function App() {
  return (
    <>
      {/* <SpotlightEffect /> */}
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
