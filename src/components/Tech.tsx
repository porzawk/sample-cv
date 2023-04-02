import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

type Props = {
  index: number;
  name: string;
  icon: string;
};
const SkillItem = ({ index, name, icon }: Props) => (
  <motion.div variants={fadeIn("down", "spring", index * 0.1, 0.5)}>
    <div className="w-28 h-28 flex flex-col items-center" key={name}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-20 h-20 object-contain"
        />
        <p className="text-white text-[16px] text-center">{name}</p>
      </motion.div>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I can do</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skill.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 p-5 bg-tertiary rounded-[20px] border-2 border-[#02B3B7]">
        {technologies.map((technology, index) => (
          <SkillItem
            key={`project-${index}`}
            index={index}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
