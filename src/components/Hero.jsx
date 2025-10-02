import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import ServiceCard, { ServiceCardMobile } from "./utils/ServiceCard";

import { tarikteshome } from "../assets";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1024;

  return (
    <section className={`relative flex flex-col max-w-7xl mx-auto`}>
      {/* Scroll Indicator */}
      <div className="  w-full flex flex-col items-center gap-2">
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
      {/* Hero Content - Two Column Layout */}
      <div
        className={`relative md:mt-8 inset-0 top-[120px] ${styles.paddingX}`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-secondary">
                  Available for new projects
                </span>
              </motion.div>

              <h1
                className={`${styles.heroHeadText} text-white leading-tight`}
                style={{ fontFamily: "Sis, Inconsolata, sans-serif" }}
              >
                Hey there, I'm{" "}
                <span
                  className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "Sis, Inconsolata, sans-serif" }}
                >
                  Tarik
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} font-light mt-6 text-secondary leading-relaxed`}
              >
                I develop{" "}
                <span className="text-white font-semibold">Mobile</span> apps,{" "}
                <span className="text-white font-semibold">websites</span>{" "}
                <br className="sm:block hidden" />
                and Design{" "}
                <span className="text-white font-semibold">
                  user interfaces
                </span>
                .
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get in touch
                </a>
                <a
                  href="#work"
                  className="px-8 py-3 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  View my work
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl rounded-full scale-110" />

              {isMobile ? (
                <ServiceCardMobile index={0} image={tarikteshome} />
              ) : (
                <ServiceCard index={0} image={tarikteshome} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
