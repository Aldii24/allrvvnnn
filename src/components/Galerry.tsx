import { useContext } from "react";
import { darkModeContext } from "../context/darkMode-context";
import Caraousel from "./Caraousel";
import RandomPhotos from "./RandomPhotos";

const Galerry = () => {
  const { theme } = useContext(darkModeContext);

  return (
    <div
      id="galerry"
      className={`overflow-hidden flex flex-col gap-4 pt-10 border-b pb-5 ${
        theme === "light" ? "border-primary" : "border-lightMode"
      }`}
    >
      <h3
        className={`text-xl font-bold border-b pb-2 w-max mb-2 ${
          theme === "light"
            ? "text-primary border-primary"
            : "text-lightMode border-lightMode"
        }`}
      >
        an Art Galerry
      </h3>
      <Caraousel autoPlay={true} />
      <RandomPhotos />
    </div>
  );
};

export default Galerry;
