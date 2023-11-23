import React from 'react';
import './App.css'; // You can import your CSS styles here

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;