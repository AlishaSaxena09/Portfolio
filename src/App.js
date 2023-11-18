import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import workExperienceData from "./data/data";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div>
        <div className="relative">
          <About />
          <Skills />
        </div>
      </div>
      {/* <div className="relative top-7/12 exp">
        <Experience props={workExperienceData} />
      </div> */}
      <div className="relative top-7/12 exp"></div>
    </div>
  );
}

export default App;
