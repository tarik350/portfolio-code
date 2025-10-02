import { motion } from "framer-motion";
import { useState } from "react";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  link,
  id,
  platform,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onViewDemo,
}) => {
  return (
    // <motion.div
    //   variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    //   className="w-full xs:w-[320px] sm:w-[360px]"
    // >
    <div className="bg-tertiary flex flex-col h-full p-5 rounded-2xl glass-effect hover:bg-tertiary/80 transition-all duration-300">
      <div className="relative w-full h-[200px] sm:h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex-grow flex flex-col">
        <h3
          className="text-white font-bold text-[22px] sm:text-[24px] mb-2 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>
        <p
          className="text-secondary text-[13px] sm:text-[14px] overflow-hidden flex-grow"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 min-h-[60px]">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[12px] sm:text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>

      <button
        onClick={() => onViewDemo(platform, id, link)}
        className="w-full sm:w-max self-center font-poppins text-white bg-black shadow-lg shadow-primary text-[16px] sm:text-[18px] font-bold uppercase px-8 sm:px-10 py-2 rounded-lg mt-6 sm:mt-10 hover:bg-opacity-80 transition-all duration-200"
      >
        view demo
      </button>
    </div>
    // </motion.div>
  );
};

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselData, setCarouselData] = useState([]);

  const handleViewDemo = async (platform, id, link) => {
    if (platform === "mobile") {
      // Dynamically import carousel data based on project id
      const { eneblaUser, eneblaResturant, samaritan } = await import(
        "../constants"
      );

      const dataMap = {
        eneblaUser,
        eneblaResturant,
        samaritan,
      };

      const data = dataMap[id];
      if (data) {
        setCarouselData(data);
        setIsModalOpen(true);
      }
    } else {
      window.location.href = link;
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2
          className={`${styles.sectionHeadText}`}
          style={{ fontFamily: "Sis, Inconsolata, sans-serif" }}
        >
          Projects.
        </h2>

      <div className="w-full flex">
        <p>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>   
      </div>

      <div className="mt-10 sm:mt-20 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 place-items-center lg:place-items-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onViewDemo={handleViewDemo}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        carouselData={carouselData}
      />
    </>
  );
};

export default SectionWrapper(Works, "");
