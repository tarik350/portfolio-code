import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary backdrop-brightness-75 overflow-hidden`}>
        <Navbar />
        <div className="relative py-20 h-screen w-full">
          {/* Hero gradient blurs */}
          <div className="gradient-blur gradient-hero-01" />
          <div className="gradient-blur gradient-hero-02" />
          <Hero />
        </div>
        <div className="relative">
          <div className="gradient-blur gradient-03" />
          <About />
        </div>
        <div className="relative">
          <Experience />
        </div>
        <div className="relative">
          <Tech />
        </div>
        <div className="relative">
          <div className="gradient-blur gradient-04" />
          <Works />
        </div>
        <div className="relative">
          <div className="gradient-blur gradient-05" />
          <Feedbacks />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
