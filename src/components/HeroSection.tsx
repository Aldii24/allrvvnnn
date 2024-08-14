import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <img
        src="7.png"
        alt=""
        className="absolute w-14 md:w-32 -top-10 left-[80px]"
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col bg-lightMode rounded-md w-[200px] md:w-[500px] md:h-[140px] mt-14 shadow-xl"
      >
        <h3 className="text-md md:text-3xl md:py-4 px-4 py-1 font-bold text-lightMode bg-primary rounded-t-md">
          Hiii !!!
        </h3>
        <p className="text-xs px-4 py-2 md:py-4 md:text-xl">
          Selamat datang di website saya yg biasa aja ini :3
        </p>
      </motion.div>
      <img
        src="7.png"
        alt=""
        className="absolute w-14 md:w-32 top-[140px] md:top-[180px] left-[50px] md:left-[150px]"
      />
      <img
        src="7.png"
        alt=""
        className="absolute w-14  md:w-32 top-[180px] md:top-[260px] left-[80px] md:left-[250px]"
      />
      <img
        src="7.png"
        alt=""
        className="absolute w-14  md:w-32 top-[220px] md:top-[] left-[120px] md:left-[]"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[230px] md:top-[200px] right-0 flex flex-col bg-lightMode rounded-md w-[200px] md:w-[500px] md:h-[140px] mt-14 shadow-xl"
      >
        <h3 className="text-md md:text-3xl md:py-4 px-4 py-1 font-bold text-lightMode bg-primary rounded-t-md">
          Hallooo !!!
        </h3>
        <p className="text-xs md:text-xl px-4 py-2">
          Uda siap buat liat kebawah blm? kalo uda, pencet dulu nama saya yg ada
          di atas tuh :3
        </p>
      </motion.div>
      <img
        src="7.png"
        alt=""
        className="absolute w-14 top-[400px] right-[80px]"
      />
      <img
        src="7.png"
        alt=""
        className="absolute w-14 top-[440px] right-[120px]"
      />
      <img
        src="7.png"
        alt=""
        className="absolute w-14 top-[480px] right-[160px]"
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[480px] left-0 flex flex-col bg-lightMode rounded-md w-[200px] mt-14 shadow-xl"
      >
        <h3 className="text-md px-4 py-1 font-bold text-lightMode bg-primary rounded-t-md">
          Hiii again !!!
        </h3>
        <p className="text-xs px-4 py-2">
          uda kannn? let's to the go... LET'S GOOO !!!
        </p>
      </motion.div>
      <img
        src="7.png"
        alt=""
        className="absolute w-14 top-[620px] left-[80px]"
      />
      <img
        src="7.png"
        alt=""
        className="absolute w-14 top-[650px] left-[120px]"
      />
      <img
        src="7.png"
        alt=""
        className="absolute w-14 top-[680px] right-[110px]"
      />

      <motion.img
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        src="6.png"
        alt=""
        className="absolute w-40 top-0 -right-10"
      />

      <motion.img
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        src="6.png"
        alt=""
        className="absolute w-40 top-[30%] -left-14"
      />
      <motion.img
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        src="6.png"
        alt=""
        className="absolute w-40 top-[60%] -right-10"
      />
    </div>
  );
};

export default HeroSection;
