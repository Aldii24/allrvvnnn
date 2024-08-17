import { Minus, PaperPlaneTilt, Plus } from "@phosphor-icons/react/dist/ssr";
import { useContext, useState } from "react";
import { darkModeContext } from "../context/darkMode-context";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useContext(darkModeContext);

  return (
    <div id="contact" className="flex flex-col gap-2">
      <div className="flex justify-center">
        <img src="love.gif" alt="" className="w-20" />
      </div>
      <div className="flex flex-col bg-primary rounded-md p-4 transition-all duration-300">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between transition-all duration-300 cursor-pointer ${
            isOpen ? "border-b pb-1" : ""
          }`}
        >
          <h3 className="text-lightMode text-sm">Hi again !!!</h3>
          {isOpen ? (
            <Minus size={15} className="text-lightMode" />
          ) : (
            <Plus size={15} className="text-lightMode" />
          )}
        </div>
        {isOpen ? (
          <p className="text-lightMode text-xs mt-2 transition-all duration-300">
            Thank u for visiting my website, this is just for share my thoughts
            into a code. Thank u for read all the content of this site. Hope
            u're doing great day.
          </p>
        ) : (
          ""
        )}
      </div>

      {/* CONTACT FORM */}
      <div
        className={`border border-primary ${
          theme === "light" ? "bg-lightMode" : "bg-smoothDark"
        } rounded-md p-8 mt-10`}
      >
        <h3
          className={`text-center text-2xl font-bold mb-5 ${
            theme === "light" ? "text-primary" : "text-primary"
          }`}
        >
          Contact me
        </h3>
        <form className="flex flex-col gap-4" action="">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className={`${
                theme === "light" ? "text-primary" : "text-lightMode"
              }`}
            >
              Nama
            </label>
            <input
              className={`px-4 py-2 bg-transparent border-none outline-none ring-1 focus:ring-primary placeholder:text-xs ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              } focus:ring-2  rounded`}
              type="text"
              placeholder="Masukkan nama kamu"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className={`${
                theme === "light" ? "text-primary" : "text-lightMode"
              }`}
            >
              Email
            </label>
            <input
              className={`px-4 py-2 bg-transparent border-none outline-none ring-1 focus:ring-primary placeholder:text-xs ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              } focus:ring-2  rounded`}
              type="email"
              placeholder="Masukkan email kamu"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className={`${
                theme === "light" ? "text-primary" : "text-lightMode"
              }`}
            >
              Pesan
            </label>
            <textarea
              className={`px-4 py-2 bg-transparent border-none outline-none ring-1 focus:ring-primary placeholder:text-xs ${
                theme === "light" ? "text-smoothDark" : "text-lightMode"
              } focus:ring-2  rounded`}
              placeholder="Masukkan pesan kamu"
              required
            />
          </div>
          <button className="flex justify-center items-center gap-2 px-4 py-2 bg-primary opacity-90 rounded-md text-lightMode font-bold shadow-xl focus:ring-2 focus:ring-primary hover:opacity-100 transition-opacity ease-in-out duration-300">
            <PaperPlaneTilt size={15} weight="fill" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
