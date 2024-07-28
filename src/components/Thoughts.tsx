import { useContext, useState } from "react";
import { darkModeContext } from "../context/darkMode-context";
import { motion } from "framer-motion";
import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";

const ThougtsSection = () => {
  const { theme } = useContext(darkModeContext);

  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  return (
    <div id="thoughts" className="relative min-h-screen">
      <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2  w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute top-4  w-[100px] h-[100px] md:w-[300px] md:h-[300px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute top-4 right-4  w-[100px] h-[100px] md:w-[300px] md:h-[300px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute top-1 right-1/2  w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute left-1 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute right-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      {/* <div className="absolute left-0 bottom-24 w-[140px] h-[140px] md:w-[100px] md:h-[100px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute  bottom-24 right-1 w-[140px] h-[140px] md:w-[100px] md:h-[100px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div> */}
      <div className="absolute left-2 top-44 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute right-2 top-44 w-[50px] h-[50px] md:w-[200px] md:h-[200px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute right-24 top-44 w-[50px] h-[50px] md:w-[50px] md:h-[50px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute right-24 top-14 w-[50px] h-[50px] md:w-[40px] md:h-[40px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute right-2 top-14 w-[50px] h-[50px] md:w-[200px] md:h-[200px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>
      <div className="absolute left-10 top-24 w-[50px] h-[50px] md:w-[200px] md:h-[200px] rounded-full bg-primary backdrop-blur-xl bg-opacity-80"></div>

      <div className="w-full flex flex-col gap-6 pt-8">
        <h3 className="text-3xl text-lightMode font-extrabold z-10">FAQ?</h3>

        <div className="w-full flex">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex flex-col w-[280px] gap-1 border border-lightMode bg-lightMode bg-opacity-10 backdrop-blur-xl rounded-md shadow-xl"
          >
            <h3
              className={`bg-lightMode ${
                theme === "light" ? "text-primary" : "text-lightMode"
              } font-bold px-4 py-2 rounded-t-md bg-opacity-10 backdrop-blur-xl`}
            >
              What's ur name?
            </h3>
            <p
              className={`px-4 py-2 ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              }`}
            >
              Hi, aku aldi...
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="w-full flex items-end justify-end"
        >
          <div className="flex flex-col w-[300px] gap-1 border border-lightMode bg-lightMode bg-opacity-10 backdrop-blur-xl rounded-md shadow-xl">
            <h3
              className={`bg-lightMode ${
                theme === "light" ? "text-primary" : "text-lightMode"
              } font-bold px-4 py-2 rounded-t-md bg-opacity-10 backdrop-blur-xl`}
            >
              What's ur favorite color?
            </h3>
            <p
              className={`px-4 py-2 ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              }`}
            >
              Blue, and sometimes i feel blue .
            </p>
          </div>
        </motion.div>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex flex-col w-[300px] gap-1 border border-lightMode bg-lightMode bg-opacity-10 backdrop-blur-xl rounded-md shadow-xl"
          >
            <h3
              className={`bg-lightMode ${
                theme === "light" ? "text-primary" : "text-lightMode"
              } font-bold px-4 py-2 rounded-t-md bg-opacity-10 backdrop-blur-xl`}
            >
              What's ur favorite food?
            </h3>
            <p
              className={`px-4 py-2 ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              }`}
            >
              Idk, i eat all 😋.
            </p>
          </motion.div>
        </div>
        <div className="w-full flex items-end justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex flex-col w-[300px] gap-1 border border-lightMode bg-lightMode bg-opacity-10 backdrop-blur-xl rounded-md shadow-xl"
          >
            <h3
              className={`bg-lightMode ${
                theme === "light" ? "text-primary" : "text-lightMode"
              } font-bold px-4 py-2 rounded-t-md bg-opacity-10 backdrop-blur-xl`}
            >
              What's ur favorite things?
            </h3>
            <p
              className={`px-4 py-2 ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              }`}
            >
              Moon & someone that i can't have it.
            </p>
          </motion.div>
        </div>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex flex-col w-[300px] gap-1 border border-lightMode bg-lightMode bg-opacity-10 backdrop-blur-xl rounded-md shadow-xl"
          >
            <h3
              className={`bg-lightMode ${
                theme === "light" ? "text-primary" : "text-lightMode"
              } font-bold px-4 py-2 rounded-t-md bg-opacity-10 backdrop-blur-xl`}
            >
              How tall are you?
            </h3>
            <p
              className={`px-4 py-2 ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              }`}
            >
              Idk, maybe around 178cm - 180cm ?
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pt-20">
        <h3
          className={`text-2xl border-b pb-1 w-max ${
            theme === "light" ? "text-primary border-primary" : "text-lightMode"
          } font-bold mb-5`}
        >
          Another FAQ ?
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col bg-primary rounded-md p-4 transition-all duration-300">
            <div
              onClick={() => setFirstOpen(!firstOpen)}
              className={`flex items-center justify-between transition-all duration-300 cursor-pointer ${
                firstOpen ? "border-b pb-1" : ""
              }`}
            >
              <h3 className="text-lightMode text-sm">
                Belajar programming dari mana?
              </h3>
              {firstOpen ? (
                <Minus size={15} className="text-lightMode" />
              ) : (
                <Plus size={15} className="text-lightMode" />
              )}
            </div>
            {firstOpen ? (
              <p className="text-lightMode text-xs mt-2 transition-all duration-300">
                Aku awal belajar dari web3 school si, trus dari website sama
                youtube jg. Jadi, aku otodidak.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col bg-primary rounded-md p-4 transition-all duration-300">
            <div
              onClick={() => setSecondOpen(!secondOpen)}
              className={`flex items-center justify-between transition-all duration-300 cursor-pointer ${
                secondOpen ? "border-b pb-1" : ""
              }`}
            >
              <h3 className="text-lightMode text-sm">
                Kenapa tertarik buat belajar programming?
              </h3>
              {secondOpen ? (
                <Minus size={15} className="text-lightMode" />
              ) : (
                <Plus size={15} className="text-lightMode" />
              )}
            </div>
            {secondOpen ? (
              <p className="text-lightMode text-xs mt-2 transition-all duration-300">
                Awalnya jg karna penasaran gmn caranya bikin suatu aplikasi,
                cara aplikasi itu bekerja, dan siapa yg buat aplikasinya. Jadi,
                intinya karna saya penasaran aja hehe :3 .
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col bg-primary rounded-md p-4 transition-all duration-300">
            <div
              onClick={() => setThirdOpen(!thirdOpen)}
              className={`flex items-center justify-between transition-all duration-300 cursor-pointer ${
                thirdOpen ? "border-b pb-1" : ""
              }`}
            >
              <h3 className="text-lightMode text-sm">
                Susah ga sih belajar programming?
              </h3>
              {thirdOpen ? (
                <Minus size={15} className="text-lightMode" />
              ) : (
                <Plus size={15} className="text-lightMode" />
              )}
            </div>
            {thirdOpen ? (
              <p className="text-lightMode text-xs mt-2 transition-all duration-300">
                Tergantung, kalo km belajar sama aku jadi gampang dan
                menyenangkan kok 🤐.
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThougtsSection;
