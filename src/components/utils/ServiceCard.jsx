import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ServiceCard = ({ index, title, image }) => (
  <Tilt className="xs:w-[350px] w-full">
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
        className="bg-tertiary rounded-[20px]  justify-center item-center flex-col"
      >
        <img
          src={image}
          alt="web-development"
          className="rounded-[20px]  object-contain"
        />
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
