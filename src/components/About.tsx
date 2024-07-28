import { useContext } from "react";
import { darkModeContext } from "../context/darkMode-context";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { theme } = useContext(darkModeContext);

  return (
    <div
      id="about"
      className={`overflow-hidden relative pt-10 min-h-screen rounded-md`}
    >
      <div className="md:hidden absolute top-0 left-[28%] w-[15px] h-[15px] bg-primary rounded-full"></div>
      <div className="md:hidden absolute w-[2px] h-10 bg-primary top-2 left-[30%]"></div>
      <motion.h3
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className={`about text-xl p-4 w-max rounded-md ${
          theme === "light"
            ? "text-lightMode bg-primary"
            : "text-lightMode bg-primary"
        } text-lightMode`}
      >
        A Short Story About Me
      </motion.h3>
      <div className="md:hidden absolute w-[2px] h-10 bg-primary top-24 left-[50%]"></div>
      {/* <div className="md:hidden absolute top-32 left-[48%] w-[15px] h-[15px] bg-primary rounded-full"></div> */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        src="1.gif"
        alt=""
        className="absolute top-20 w-28 mt-10"
      />
      <motion.p
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className={`about flex absolute top-32 right-8 text-xs p-4 w-[200px] rounded-md ${
          theme === "light"
            ? "text-lightMode bg-primary"
            : "text-lightMode bg-primary"
        } text-lightMode`}
      >
        Currently I am a student of Computer Science.
      </motion.p>
      <div className="md:hidden absolute w-[2px] h-10 bg-primary top-[191px] left-[50%]"></div>
      <div className="md:hidden absolute w-[100px] h-[2px] bg-primary top-[229px] left-[20%]"></div>
      <div className="md:hidden absolute w-[2px] h-8 bg-primary top-[230px] left-[20%]"></div>
      <motion.p
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className={`about flex absolute top-[260px] left-0 text-xs p-4 w-[200px] rounded-md ${
          theme === "light"
            ? "text-lightMode bg-primary"
            : "text-lightMode bg-primary"
        } text-lightMode`}
      >
        I don't have any programming basics, so i taught myself
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        src="2.gif"
        alt=""
        className="absolute top-[260px] right-0 w-28"
      />
      <div className="md:hidden absolute top-[320px] left-36 w-[2px] h-[40px] bg-primary"></div>
      <div className="md:hidden absolute top-[360px] left-36 w-[100px] h-[2px] bg-primary"></div>
      <div className="md:hidden absolute top-[360px] right-[82px] w-[2px] h-[30px] bg-primary"></div>
      <motion.p
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className={`about flex absolute top-[390px] right-0 text-xs p-4 w-[200px] rounded-md ${
          theme === "light"
            ? "text-lightMode bg-primary"
            : "text-lightMode bg-primary"
        } text-lightMode`}
      >
        I like learning new things that can make my self-worth high
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        src="3.gif"
        alt=""
        className="absolute top-[380px] w-28 mt-10"
      />
      <div className="md:hidden absolute top-[450px] right-[82px] w-[2px] h-[50px] bg-primary"></div>
      <div className="md:hidden absolute top-[498px] left-11 w-[200px] h-[2px] bg-primary"></div>
      <div className="md:hidden absolute top-[500px] left-11 w-[2px] h-[30px] bg-primary"></div>
      <motion.p
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className={`about flex absolute top-[530px] left-0 text-xs p-4 w-[200px] rounded-md ${
          theme === "light"
            ? "text-lightMode bg-primary"
            : "text-lightMode bg-primary"
        } text-lightMode`}
      >
        I like looking at the moon and taking photos of it
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        src="4.png"
        alt=""
        className="absolute top-[470px] right-0 w-28 mt-10"
      />
      <div className="md:hidden absolute top-[590px] left-11 w-[2px] h-[30px] bg-primary"></div>
      <div className="md:hidden absolute top-[620px] left-11 w-[200px] h-[2px] bg-primary"></div>
      <div className="md:hidden absolute top-[620px] right-[82px] w-[2px] h-[30px] bg-primary"></div>
      <motion.p
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className={`about flex absolute top-[650px] right-0 text-xs p-4 w-[200px] rounded-md ${
          theme === "light"
            ? "text-lightMode bg-primary"
            : "text-lightMode bg-primary"
        } text-lightMode`}
      >
        and also like watching anime from Ghibli Studio
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        src="5.gif"
        alt=""
        className="absolute top-[600px] left-0 w-24 mt-10"
      />
      <div className="md:hidden absolute top-[680px] left-[110px] w-[70px] h-[2px] bg-primary"></div>
      <div className="md:hidden absolute top-[673px] left-[100px] w-[15px] h-[15px] bg-primary rounded-full"></div>
    </div>
  );
};

export default AboutPage;
