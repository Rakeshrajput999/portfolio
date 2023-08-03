import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Work />
        <Skill />
        <Contact />
      </div>
    </>
  );
}

export default App;
