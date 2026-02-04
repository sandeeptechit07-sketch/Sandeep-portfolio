import './App.css';
import Navbar from './Comnponents/Navbar';
import Hero from './Comnponents/Hero';
import About from './Comnponents/About';
import Projects from './Comnponents/Projects';
import Skills from './Comnponents/Skills';
import Contact from './Comnponents/Contact';
import Footer from './Comnponents/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-[#0a0a20] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
