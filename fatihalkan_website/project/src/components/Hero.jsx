import github from "/images/home-images/github.png";
import linkedin from "/images/home-images/linkedin.png";
import myphoto from "/images/home-images/myphoto.jpeg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex max-w-6xl h-[440px] mx-auto mt-16 px-12 dark:bg-def-gray-800">
      <div className="flex flex-col gap-12 flex-2/3">
        <div className="flex items-center gap-4">
          <div className="w-24 h-px bg-def-lila" />
          <h2 className="text-def-lila text-xl font-semibold leading-8 dark:text-def-lila">
            Fatih ALKAN
          </h2>
        </div>

        <h3 className="text-7xl text-def-gray-800 max-w-3xl h-32 font-bold dark:text-def-baslik-dark whitespace-pre-line">
          {t("innovative")}
        </h3>

        <p className="text-def-gray-500 max-w-[460px] dark:text-white">
          {t("intro")}
        </p>

        <div className="flex gap-4 items-center">
          <a
            href=""
            className="bg-indigo-500 text-white border-indigo-500 border-2 py-2 px-6 rounded-[8px] hover:bg-white hover:text-def-indigo-800 dark:bg-[#E1E1FF] dark:text-black dark:border-[#E1E1FF] dark:hover:text-black"
          >
            {t("hireMe")}
          </a>
          <a
            href="https://github.com/fatih-alkan" target="blank"
            className="flex gap-2 items-center text-indigo-500 border-indigo-500 border-2 py-2 px-6 rounded-[8px] hover:text-white hover:border-white hover:bg-indigo-500 dark:bg-def-gray-500 dark:text-def-lila dark:border-def-lila dark:hover:bg-def-lila"
          >
            <FaGithub />
            {t("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/fatih-alkan-4b1026269/" target="blank"
            className="flex gap-2 items-center text-indigo-500 border-indigo-500 border-2 py-2 px-6 rounded-[8px] hover:text-white hover:border-white hover:bg-indigo-500 dark:bg-def-gray-500 dark:text-def-lila dark:border-def-lila dark:hover:bg-def-lila"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="my-auto">
        <img className="h-[370px]" src={myphoto} alt="Fatih's profile" />
      </div>
    </section>
  );
}
