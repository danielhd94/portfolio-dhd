import './App.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div >
    </ThemeProvider>
  );
}

export default App;