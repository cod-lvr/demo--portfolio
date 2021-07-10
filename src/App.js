import React from 'react';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
