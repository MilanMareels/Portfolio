import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />

      <FadeInWhenVisible onLoad={true}>
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Skills />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Projects />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Experience />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
}

export default App;
