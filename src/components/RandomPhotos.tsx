import { motion } from "framer-motion";

const RandomPhotos = () => {
  //   const { theme } = useContext(darkModeContext);

  return (
    <div className="flex flex-col mt-5">
      {/* <h3
        className={`flex justify-end text-md font-thin ${
          theme === "light" ? "text-primary" : "text-lightMode"
        } `}
      >
        Idk, just random photos :3
      </h3> */}
      <div className="grid grid-cols-2 gap-4">
        <motion.img
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r1.jpeg"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r2.jpeg"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r3.jpeg"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r4.jpeg"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r5.gif"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r6.jpeg"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r7.jpeg"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
        <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="r8.gif"
          alt=""
          className="rounded-md object-cover w-full h-[200px]"
        />
      </div>
    </div>
  );
};

export default RandomPhotos;
