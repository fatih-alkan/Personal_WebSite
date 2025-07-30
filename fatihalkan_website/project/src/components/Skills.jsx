import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();
    return (
        <>
            <section className="flex flex-col max-w-6xl mx-auto mt-16 h-68 gap-12 dark:bg-def-gray-800">
                <h3 className="text-5xl font-bold text-def-gray-800 dark:text-def-baslik-dark">{t("skills")}</h3>
                <div className="flex gap-24 justify-center">
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila">Java Script</h3>
                        <p className="text-def-gray-500 dark:text-white">{t("javascript")}</p>
                    </div>
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila">React.Js</h3>
                        <p className="text-def-gray-500 dark:text-white">{t("reactjs")}</p>
                    </div>
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila">Node.Js</h3>
                        <p className="text-def-gray-500 dark:text-white">{t("nodejs")}</p>
                    </div>
                </div>
                <hr className="text-def-indigo-700 dark:text-def-lila" />
            </section>
        </>
    )
}