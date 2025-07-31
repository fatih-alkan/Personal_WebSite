import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    axios.get("/data/projects.json")
      .then((res) => {
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch((err) => {
        setError(t("fetchError"));
        setLoading(false);
        console.error(err);
      });
  }, [i18n.language]); 

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="flex flex-col max-w-6xl mx-auto gap-12 dark:bg-def-gray-800 py-12 max-laptop:max-w-3xl max-tablet:max-w-2xl max-phone:w-[300px]">
      <h3 className="text-5xl font-bold text-def-gray-800 dark:text-def-baslik-dark max-tablet:text-4xl">
        {t("projects")}
      </h3>

      <div className="flex gap-12 justify-center flex-wrap w-full ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative hover:bottom-4 flex flex-col gap-6 max-w-xs border-2 border-gray-200 rounded-xl p-4 bg-gray-100 dark:bg-gray-500 dark:border-gray-500 max-laptop:max-w-[200px] max-laptop:gap-4"
          >
            <img
              src={project.image}
              alt={project.title[i18n.language]}
              className="hover:opacity-70 w-full h-60 object-cover rounded-lg shadow-md max-laptop:h-50"
            />

            <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila max-tablet:text-2xl max-phone:text-xl max-laptop:text-2xl">
              {project.title[i18n.language]}
            </h3>

            <p className="text-def-gray-500 dark:text-white text-sm h-26 max-laptop:text-[12px] max-phone:text-[10px]">
              {project.description[i18n.language]}
            </p>

            <div className="flex gap-2 max-laptop:mt-9">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-def-gray-800 border border-def-gray-500 rounded-xl dark:text-gray-300 dark:border-gray-700 max-laptop:text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-2 max-laptop:mt-0 ">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-def-indigo-700 hover:font-bold flex gap-2 items-center dark:text-def-lila max-laptop:text-[14px]"
              >
                {t("github")} <FiExternalLink />
              </a>
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-def-indigo-700 hover:font-bold flex gap-2 items-center dark:text-def-lila max-laptop:text-[14px]"
              >
                {t("viewSite")} <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>

      <hr className="text-def-indigo-700 dark:text-def-lila mt-12" />
    </section>
  );
}
