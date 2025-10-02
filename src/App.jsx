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
import {motion} from 'framer-motion'

const App = () => {
  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary backdrop-brightness-75 overflow-hidden  `}>
    
        <Navbar />
        <div className="relative py-20 h-screen w-full">
          {/* Hero gradient blurs */}
                 {/* Scroll Indicator */}
      <div className="  w-full flex flex-col items-center gap-2  absolute bottom-0">
        <span className="text-secondary text-sm animate-pulse">
          Scroll to explore
        </span>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 bg-black/20 backdrop-blur-sm flex justify-center items-start p-2 hover:border-white/50 hover:bg-white/5 transition-all duration-300 group">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white group-hover:bg-blue-400 transition-colors mb-1"
            />
          </div>
        </a>
      </div>
          <div className="gradient-blur gradient-hero-01" />
          <div className="gradient-blur gradient-hero-02" />
          <Hero />
        </div>
        <div className="relative mt-32 sm:mt-0">
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
