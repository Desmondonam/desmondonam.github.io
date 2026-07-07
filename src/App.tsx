import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Projects from './components/sections/Projects';
import Leadership from './components/sections/Leadership';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Projects />
        <Leadership />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
