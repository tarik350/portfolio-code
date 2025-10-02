import { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import NewServiceCard, { ServiceCardMobile } from "./utils/ServiceCard";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col glass-effect hover:bg-tertiary/70 transition-all duration-300"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
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

  const isMobile = width <= 768;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={styles.sectionHeadText}
          style={{ fontFamily: "Sis, Inconsolata, sans-serif" }}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate software engineer with a strong focus on full stack web
        and mobile development, software design, and modern DevOps practices.
        Over the years, I've delivered multiple enterprise-level projects—many
        of which are currently live and actively serving users. My expertise
        spans the entire development lifecycle, from architecting scalable
        systems and designing intuitive user interfaces to managing cloud
        infrastructure, server hosting, and deployment pipelines. I thrive on
        building robust, maintainable applications using a wide range of
        technologies, including AWS, Express.js, Flutter, JavaScript, Jenkins,
        MongoDB, Next.js, Nginx, Node.js, React, SQL, and Tailwind CSS. My
        experience with DevOps enables me to efficiently scale applications,
        automate deployments, and ensure reliable server management. I have a
        deep appreciation for software architecture and love crafting solutions
        that are both elegant and effective. Whether it's designing seamless
        user experiences or optimizing backend performance, I bring creativity,
        adaptability, and a problem-solving mindset to every project. You can
        explore some of my recent full stack projects in the section below.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => {
          if (isMobile) {
            return (
              <ServiceCardMobile
                obile
                key={service.title}
                index={index}
                image={service.icon}
                title={service.title}
                about={true}
              />
            );
          } else {
            return (
              <ServiceCard key={service.title} index={index} {...service} />
            );
          }
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
