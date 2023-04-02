import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  StarsCanvas,
} from "./components";

function App() {
  document.title = 'Sample CV';
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
