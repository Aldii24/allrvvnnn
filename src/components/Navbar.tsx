import {
  HouseLine,
  ChalkboardTeacher,
  CalendarHeart,
  ReadCvLogo,
  AddressBook,
  PersonSimple,
  TextAlignRight,
  X,
  Images,
  InstagramLogo,
  WhatsappLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";
import { useContext, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { darkModeContext } from "../context/darkMode-context";

const Navbar = () => {
  const { theme } = useContext(darkModeContext);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const playMusic = () => {
    const audio = new Audio("fil-cas.mp3");
    audio.play();
    audio.loop = true;
  };

  return (
    <div
      className={`fixed top-[10px] left-[15px] right-[15px] md:left-[50px] md:right-[50px] shadow-xl z-30 ${
        theme === "light" ? "bg-lightMode" : "bg-black"
      } bg-opacity-10 backdrop-blur-xl border border-white/20 rounded-md px-2 py-2`}
    >
      <div className="w-full flex justify-between gap-8 items-center">
        <div className="hidden md:flex justify-between w-full items-center gap-4">
          <div
            className={`flex items-center gap-2 ${
              theme === "light" ? "text-black" : "text-lightMode"
            }`}
          >
            <img src="fav10.gif" alt="" className="w-14" />
            <a
              className={`flex gap-2 px-4 py-2 rounded-md transition-all ease-in-out duration-500 ${
                activeMenu === "home" ? "bg-primary text-lightMode" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("home")}
            >
              <HouseLine
                size={20}
                weight={activeMenu === "home" ? "fill" : "regular"}
              />
              Home
            </a>

            <a
              className={`flex gap-2 px-4 py-2 rounded-md transition-all ease-in-out duration-500 ${
                activeMenu === "about" ? "bg-primary text-lightMode" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("about")}
            >
              <ChalkboardTeacher
                size={20}
                weight={activeMenu === "about" ? "fill" : "regular"}
              />
              About
            </a>

            <a
              className={`flex gap-2 px-4 py-2 rounded-md transition-all ease-in-out duration-500 ${
                activeMenu === "thoughts" ? "bg-primary text-lightMode" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("thoughts")}
            >
              <CalendarHeart
                size={20}
                weight={activeMenu === "thoughts" ? "fill" : "regular"}
              />
              Thoughts
            </a>

            <a
              className={`flex gap-2 px-4 py-2 rounded-md transition-all ease-in-out duration-500 ${
                activeMenu === "projects" ? "bg-primary text-lightMode" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("projects")}
            >
              <ReadCvLogo
                size={20}
                weight={activeMenu === "projects" ? "fill" : "regular"}
              />
              Projects
            </a>

            <a
              className={`flex gap-2 px-4 py-2 rounded-md transition-all ease-in-out duration-500 ${
                activeMenu === "contact" ? "bg-primary text-lightMode" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("contact")}
            >
              <AddressBook
                size={20}
                weight={activeMenu === "contact" ? "fill" : "regular"}
              />
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ToggleDarkMode />
            <button className="flex items-center gap-4 px-4 py-2 bg-primary hover:bg-opacity-90 transition-all duration-300 rounded-full text-lightMode font-bold">
              Aldiii <PersonSimple />
            </button>
            <TextAlignRight
              size={25}
              className="md:hidden text-primary cursor-pointer"
            />
          </div>
        </div>

        <div className="relative md:hidden flex w-full justify-between items-center">
          <img src="fav10.gif" alt="" className="md:hidden w-12" />
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-1 p-2 bg-primary hover:bg-opacity-90 transition-all duration-300 rounded-full text-xs text-lightMode font-medium"
              onClick={playMusic}
            >
              Aldiii <PersonSimple />
            </button>
            {isShowMenu ? (
              <X
                size={25}
                className="md:hidden text-primary cursor-pointer"
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            ) : (
              <TextAlignRight
                size={25}
                className="md:hidden text-primary cursor-pointer"
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            )}
          </div>

          {isShowMenu && (
            <div
              className={`absolute right-0 top-[50px] flex flex-col gap-8 p-4 w-44 rounded-md h-max shadow-2xl transition-all ease-in-out duration-500 z-50 ${
                theme === "light" ? "bg-lightMode " : "bg-smoothDark"
              }`}
            >
              <div className="flex flex-col gap-4 border-b border-primary pb-10">
                <div
                  className={`text-xs border-b border-primary pb-2 ${
                    theme === "light" ? "text-smoothDark" : "text-lightMode"
                  }`}
                >
                  Menu
                </div>
                <a
                  className={`flex items-center gap-2 p-2 text-xs rounded-md transition-all ease-in-out duration-500 ${
                    activeMenu === "home" ? "bg-primary text-lightMode" : ""
                  } ${theme === "light" ? "" : "text-lightMode"}`}
                  href="#"
                  onClick={() => handleMenuClick("home")}
                >
                  <HouseLine
                    size={20}
                    weight={activeMenu === "home" ? "fill" : "regular"}
                  />
                  Home
                </a>
                <a
                  className={`flex items-center gap-2 p-2 text-xs rounded-md transition-all ease-in-out duration-500 ${
                    activeMenu === "about" ? "bg-primary text-lightMode" : ""
                  } ${theme === "light" ? "" : "text-lightMode"}`}
                  href="#about"
                  onClick={() => handleMenuClick("about")}
                >
                  <ChalkboardTeacher
                    size={20}
                    weight={activeMenu === "about" ? "fill" : "regular"}
                  />
                  About
                </a>
                <a
                  className={`flex items-center gap-2 p-2 text-xs rounded-md transition-all ease-in-out duration-500 ${
                    activeMenu === "thoughts" ? "bg-primary text-lightMode" : ""
                  } ${theme === "light" ? "" : "text-lightMode"}`}
                  href="#thoughts"
                  onClick={() => handleMenuClick("thoughts")}
                >
                  <CalendarHeart
                    size={20}
                    weight={activeMenu === "thoughts" ? "fill" : "regular"}
                  />
                  Thoughts
                </a>
                <a
                  className={`flex items-center gap-2 p-2 text-xs rounded-md transition-all ease-in-out duration-500 ${
                    activeMenu === "galerry" ? "bg-primary text-lightMode" : ""
                  } ${theme === "light" ? "" : "text-lightMode"}`}
                  href="#galerry"
                  onClick={() => handleMenuClick("galerry")}
                >
                  <Images
                    size={20}
                    weight={activeMenu === "galerry" ? "fill" : "regular"}
                  />
                  Galerry
                </a>
                <a
                  className={`flex items-center gap-2 p-2 text-xs rounded-md transition-all ease-in-out duration-500 ${
                    activeMenu === "contact" ? "bg-primary text-lightMode" : ""
                  } ${theme === "light" ? "" : "text-lightMode"}`}
                  href="#contact"
                  onClick={() => handleMenuClick("contact")}
                >
                  <AddressBook
                    size={20}
                    weight={activeMenu === "contact" ? "fill" : "regular"}
                  />
                  Contact
                </a>
              </div>
              <div className="flex flex-col gap-4 border-b pb-4 border-primary">
                <p
                  className={`text-xs border-b border-primary pb-2 ${
                    theme === "light" ? "text-smoothDark" : "text-lightMode"
                  }`}
                >
                  Feature
                </p>
                <ToggleDarkMode />
              </div>
              <div className="flex flex-col gap-4">
                <p
                  className={`text-xs border-b border-primary pb-2 ${
                    theme === "light" ? "text-smoothDark" : "text-lightMode"
                  }`}
                >
                  Social media
                </p>
                <div className="flex gap-4 pb-4">
                  <a href="https://www.instagram.com/allrvvnn/" target="_blank">
                    <InstagramLogo size={25} className="text-primary" />
                  </a>
                  <a href="https://wa.me/6281372648563" target="_blank">
                    <WhatsappLogo size={25} className="text-primary" />
                  </a>
                  <a
                    href="https://facebook.com/aldi.irawan.311493/"
                    target="_blank"
                  >
                    <FacebookLogo size={25} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
