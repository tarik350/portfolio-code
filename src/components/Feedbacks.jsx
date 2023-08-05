import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
  phone,
}) => {
  const showAlert = () => {
    alert("unfotunrally, I could't find link to this testimonial");
  };
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200  px-16 py-10 rounded-3xl xs:w-[400px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1 ">
        <p className="text-white tracking-wider text-[18px] leading-8  ">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1  ">
          <div className="flex-1  flex flex-col">
            {link ? (
              <div className=" ">
                <p className=" cursor-pointer text-white font-medium text-[16px] hover:text-green-600 transition-all ease-in-out  duration-150 ">
                  <span className="blue-text-gradient cursor-pointer ">@</span>{" "}
                  {name}
                </p>
              </div>
            ) : (
              <a onClick={showAlert} href={link} className="">
                {" "}
                <p className=" cursor-pointer text-white font-medium text-[16px] hover:text-green-600 transition-all ease-in-out  duration-150 ">
                  <span className=" cursor-pointer blue-text-gradient">@</span>{" "}
                  {name}
                </p>
              </a>
            )}
            <div>
              <p className="mt-1 text-secondary text-[12px]">{designation} </p>
              {phone && (
                <div className="mt-1 text-secondary text-[12px]">({phone})</div>
              )}
            </div>
          </div>

          <a href={link}>
            <div>
              <img
                src={image}
                alt={`feedback_by-${name}`}
                className=" cursor-pointer w-[70px] h-[70px] rounded-full object-cover scale-75 hover:scale-100 transition-all duration-400 ease-in-out "
              />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
