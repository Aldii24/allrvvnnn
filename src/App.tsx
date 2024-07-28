import { useContext } from "react";
import { darkModeContext } from "./context/darkMode-context";
import RunText from "./components/RunText";
import HeroSection from "./components/HeroSection";
import AboutPage from "./components/About";
import ThougtsSection from "./components/Thoughts";
import Galerry from "./components/Galerry";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

export default function App() {
  const { theme } = useContext(darkModeContext);

  return (
    <>
      <div
        className={`px-4 pt-20 md:px-8 lg:px-[52px] xl:px-[52px] transition-all ease-in-out duration-300 ${
          theme === "light" ? "bg-lightMode" : "bg-smoothDark"
        } min-h-screen`}
      >
        <div>
          <HeroSection />
        </div>
        <div className="">
          <RunText />
        </div>
        <div className="mt-10">
          <AboutPage />
        </div>
        <div className="mt-20">
          <ThougtsSection />
        </div>
        <div className="mt-10">
          <Galerry />
        </div>
        <div className="mt-10">
          <ContactPage />
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
