import React from 'react';
import Header from "./components/Header";
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
