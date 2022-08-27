import './App.css'; 
import React from 'react';
import Header from './Header';
import Aboutme from './Aboutme';
import Skills from './Skills';
import TopContent from './TopContent';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <TopContent />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
