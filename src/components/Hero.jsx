import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MobileView, BrowserView } from "react-device-detect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import ServiceCard, { ServiceCardMobile } from "./utils/ServiceCard";

import {
  tarikHero,
  tarikMainHero,
  tarikHeroProfile,
  tarikLogo,
} from "../assets";

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

  //h-screen is the cause of this problem we have to find a way to give the same property without affecting
  //the screens layout
  return (
    <section className={`flex   flex-col  max-w-7xl mx-auto`}>
      {/* child one */}
      <div
        className={`  md:mt-8  inset-0 top-[120px]     ${styles.paddingX} flex flex-row   gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#95d5b2]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there, I'm <span className="text-[#b7e4c7]">Tarik</span>
          </h1>
          <p className={`${styles.heroSubText}font-italic mt-2 text-white-100`}>
            I develop <span className="text-[red]">Mobile </span>apps,{" "}
            <span className="text-[red]">websites</span>{" "}
            <br className="sm:block hidden" />
            and Design <span className="text-[red]">user interface</span>.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className=" mt-20 mb-16 mx-16 flex justify-center">
        {isMobile ? (
          <ServiceCardMobile index={0} image={tarikMainHero} />
        ) : (
          <ServiceCard index={0} image={tarikMainHero} />
        )}
      </div>

      <div className="  xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
