import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />

      <FadeInWhenVisible onLoad={true}>
        <Hero />
      </FadeInWhenVisible>

      <About />

      <Skills />

      <Projects />

      <Publications />

      <Experience />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
