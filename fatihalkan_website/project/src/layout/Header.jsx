import { useReducer, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import flogo from "/images/header-images/f-logo.png";
import { useTranslation } from "react-i18next";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    case "TOGGLE_LANGUAGE":
      return { ...state, language: state.language === "tr" ? "en" : "tr" };
    default:
      return state;
  }
}

const initialState = {
  darkMode: false,
  language: "en",
};

export default function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const root = document.documentElement;
    if (state.darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [state.darkMode]);

  const handleLanguageToggle = () => {
    const newLang = state.language === "tr" ? "en" : "tr";
    dispatch({ type: "TOGGLE_LANGUAGE" });
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="dark:bg-def-gray-800">
      <div className="flex items-center gap-4 text-sm font-medium text-gray-600 justify-end h-16 max-w-6xl mx-auto">
        {/* Dark Mode Toggle */}
        <label
          className="flex items-center cursor-pointer"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          <div
            className="relative w-10 h-5 rounded-full transition-all"
            style={{ backgroundColor: state.darkMode ? "#333" : "#4338CA" }}
          >
            <div
              className="w-4 h-4 rounded-full absolute top-0.5 transition-transform flex items-center justify-center text-[10px]"
              style={{
                backgroundColor: "#facc15",
                transform: state.darkMode
                  ? "translateX(2px)"
                  : "translateX(20px)",
              }}
            >
              {state.darkMode && <FaMoon color="#3A3A3A" />}
            </div>
          </div>
          <span className="ml-2 hover:text-def-gray-500 dark:text-white">
            {state.darkMode ? t("darkMode") : t("lightMode")}
          </span>
        </label>

        <span className="text-gray-400">|</span>

        {/* Dil Seçimi */}
        <span className="text-gray-500 cursor-pointer" onClick={handleLanguageToggle}>
          {state.language === "tr" ? (
            <>
              <span className="text-def-indigo-700 font-bold hover:text-def-indigo-800 dark:text-def-lila">
                {t("english").toUpperCase()}
              </span>{" "}
              <span>{t("switchTo")}</span>
            </>
          ) : (
            <>
              <span>{t("switchTo")}</span>{" "}
              <span className="text-def-indigo-700 font-bold dark:text-def-lila">
                {t("turkish").toUpperCase()}
              </span>
            </>
          )}
        </span>
      </div>

      <nav className="flex justify-between items-center max-w-6xl h-20 mx-auto">
        <a
          href=""
          className="border-2 rounded-4xl p-2 bg-[#EEEBFF] border-[#EEEBFF]"
        >
          <img className="w-10" src={flogo} alt="" />
        </a>
        <div className="flex gap-16 items-center">
          <a className="text-def-gray-500 hover:text-def-gray-800 dark:text-gray-300 dark:hover:opacity-70 dark:hover:text-gray-300">
            {t("skills")}
          </a>
          <a className="text-def-gray-500 hover:text-def-gray-800 dark:text-gray-300 dark:hover:opacity-70 dark:hover:text-gray-300">
            {t("project")}
          </a>
          <a className="text-def-indigo-800 border-def-indigo-800 border-2 py-2 px-6 rounded-[8px] hover:text-white hover:border-white hover:bg-def-indigo-800 dark:bg-white dark:text-def-indigo-800 dark:border-white">
            {t("hireMe")}
          </a>
        </div>
      </nav>
    </header>
  );
}
