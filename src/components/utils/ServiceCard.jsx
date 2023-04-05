import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ServiceCard = ({ index, title, image }) => (
  <Tilt className="xs:w-[350px]  w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-xl green-pink-gradient shadow-lg green-"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary overflow-hidden rounded-xl   justify-center item-center flex-col"
      >
        <img src={image} alt="web-development" className="  object-contain" />
      </div>
    </motion.div>
  </Tilt>
);

export const ServiceCardMobile = ({ index, title, image, about }) => (
  <section className="xs:w-[350px]  w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-xl green-pink-gradient shadow-lg green-"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${
          about
            ? "bg-tertiary rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            : "bg-tertiary overflow-hidden rounded-xl   justify-center item-center flex-col"
        }`}
      >
        <img
          src={image}
          alt="web-development"
          className={`${about ? "w-16 h-16 " : "  "} object-contain `}
        />
        <p
          className={`${
            about ? "block" : "hidden"
          } text-white text-[20px] font-bold text-center`}
        >
          {" "}
          {title}
        </p>
      </div>
    </div>
  </section>
);

export default ServiceCard;
