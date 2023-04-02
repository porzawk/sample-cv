import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { avatar } from "../assets";
import { slideIn } from "../utils/motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["I'm a Frontend Web Developer", "<CodingIsMyLife/>"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 40,
    deleteSpeed: 30,
  });
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  `}>
        <div className="max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#02b3b7]" />
            <div className="w-1 sm:h-40 h-40 green-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#02b3b7]">Natthachai (Por)</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {text}
              <Cursor cursorColor="#02b3b7" />
            </p>
          </div>
        </div>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <div className="flex justify-center relative top-[-10px] ">
            <img
              src={avatar}
              alt="logo"
              className="w-100 h-100 object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <BsChevronDoubleDown size="2em" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
