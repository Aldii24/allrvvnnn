import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { darkModeContext } from "../context/darkMode-context";

const ToggleDarkMode = () => {
  const { theme, handleToggleTheme } = useContext(darkModeContext);

  return (
    <div className="flex">
      {theme === "light" ? (
        <div className="flex items-center gap-2">
          <button
            className="p-1.5 rounded-full bg-primary hover:bg-opacity-90 transition-all duration-300"
            onClick={() => handleToggleTheme()}
            title="Change mode"
          >
            <Sun
              size={20}
              weight="fill"
              className={`text-lightMode cursor-pointer`}
            />
          </button>
          <h3 className="text-smoothDark text-xs">Light mode</h3>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button
            className="p-1.5 rounded-full bg-primary hover:bg-opacity-90 transition-all duration-300"
            onClick={() => handleToggleTheme()}
            title="Change mode"
          >
            <Moon
              size={20}
              weight="fill"
              className="text-lightMode cursor-pointer"
            />
          </button>
          <h3 className="text-lightMode text-xs">Dark mode</h3>
        </div>
      )}
    </div>
  );
};

export default ToggleDarkMode;
