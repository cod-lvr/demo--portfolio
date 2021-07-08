import React from 'react';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <About />
    </React.Fragment>
  );
}

export default App;
