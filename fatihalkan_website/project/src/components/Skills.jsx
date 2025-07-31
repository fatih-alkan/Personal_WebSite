import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();
    return (
        <>
            <section className="flex flex-col max-w-6xl mx-auto mt-20 max-h-88 gap-12 dark:bg-def-gray-800 max-laptop:max-w-3xl max-tablet:max-w-2xl max-phone:w-[300px]">
                <h3 className="text-5xl font-bold text-def-gray-800 dark:text-def-baslik-dark max-tablet:text-4xl">{t("skills")}</h3>
                <div className="flex gap-24 justify-center max-phone:w-[300px] max-phone:gap-10 max-phone:mx-auto">
                    <div className="flex-col flex gap-4 ">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila max-tablet:text-2xl max-phone:text-xl">Java Script</h3>
                        <p className="text-def-gray-500 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("javascript")}</p>
                    </div>
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila max-tablet:text-2xl max-phone:text-xl">React.Js</h3>
                        <p className="text-def-gray-500 dark:text-white max-tablet:text-[12px]">{t("reactjs")}</p>
                    </div>
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila max-tablet:text-2xl max-phone:text-xl">Node.Js</h3>
                        <p className="text-def-gray-500 dark:text-white max-tablet:text-[12px]">{t("nodejs")}</p>
                    </div>
                </div>
                <hr className="text-def-indigo-700 dark:text-def-lila" />
            </section>
        </>
    )
}