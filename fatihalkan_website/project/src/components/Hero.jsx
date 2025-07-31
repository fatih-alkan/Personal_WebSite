import github from "/images/home-images/github.png";
import linkedin from "/images/home-images/linkedin.png";
import myphoto from "/images/home-images/myphoto.jpeg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex max-w-6xl max-h-[440px] mx-auto mt-16 px-12 dark:bg-def-gray-800 max-laptop:max-w-4xl  max-tablet:max-h-[690px] max-tablet:gap-8 max-phone:flex-col-reverse max-phone:max-w-full">
      <div className="flex flex-col gap-12 flex-2/3 max-laptop:gap-8 max-laptop:flex-1/2 max-phone:w-[424px]">
        <div className="flex items-center gap-4">
          <div className="w-24 h-px bg-def-lila" />
          <h2 className="text-def-lila text-xl font-semibold leading-8 dark:text-def-lila max-tablet:w-40">
            Fatih ALKAN
          </h2>
        </div>

        <h3 className="text-7xl text-def-gray-800 max-w-3xl max-h-56 font-bold dark:text-def-baslik-dark whitespace-pre-line max-laptop:text-6xl max-tablet:text-4xl ">
          {t("innovative")}
        </h3>

        <p className="text-def-gray-500 max-w-[460px] dark:text-white max-laptop:text-[14px] max-tablet:max-w-2xs ">
          {t("intro")}
        </p>

        <div className="flex gap-4 items-center max-tablet:max-w-2xs max-tablet:items-start max-tablet:gap-2 ">
          <a
            href=""
            className="bg-indigo-500 text-white border-indigo-500 border-2 py-2 px-6 rounded-[8px] hover:bg-white hover:text-def-indigo-800 dark:bg-[#E1E1FF] dark:text-black dark:border-[#E1E1FF] dark:hover:text-black max-laptop:py-1 max-laptop:px-2 max-tablet:text-[10px]"
          >
            {t("hireMe")}
          </a>
          <a
            href="https://github.com/fatih-alkan" target="blank"
            className="flex gap-2 items-center text-indigo-500 border-indigo-500 border-2 py-2 px-6 rounded-[8px] hover:text-white hover:border-white hover:bg-indigo-500 dark:bg-def-gray-500 dark:text-def-lila dark:border-def-lila dark:hover:bg-def-lila max-laptop:py-1 max-laptop:px-2 max-tablet:text-[10px]"
          >
            <FaGithub />
            {t("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/fatih-alkan-4b1026269/" target="blank"
            className="flex gap-2 items-center text-indigo-500 border-indigo-500 border-2 py-2 px-6 rounded-[8px] hover:text-white hover:border-white hover:bg-indigo-500 dark:bg-def-gray-500 dark:text-def-lila dark:border-def-lila dark:hover:bg-def-lila max-laptop:py-1 max-laptop:px-2 max-tablet:text-[10px]"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="my-auto max-phone:w-[420px]">
        <img className="h-[370px] max-[900px]:h-72 max-phone:h-100" src={myphoto} alt="Fatih's profile" />
      </div>
    </section>
  );
}
