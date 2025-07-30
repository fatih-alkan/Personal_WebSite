import { useTranslation } from "react-i18next";

export default function Profile() {
    const { t } = useTranslation();
    return (
        <>
            <section className="flex flex-col max-w-6xl mx-auto mt-16 h-[470px] gap-12 dark:bg-def-gray-800">
                <h3 className="text-5xl font-bold text-def-gray-800 dark:text-def-baslik-dark">{t("profile")}</h3>
                <div className="flex gap-36 justify-center">
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila">{t("profile")}</h3>
                        <div className="flex gap-13">
                            <h4 className="font-bold text-def-gray-800 dark:text-white">{t("dob")}</h4>
                            <p className="text-def-gray-600 dark:text-white">19.08.2000</p>
                        </div>
                        <div className="flex gap-22">
                            <h4 className="font-bold text-def-gray-800 dark:text-white">{t("address")}</h4>
                            <p className="text-def-gray-600 dark:text-white">Umraniye/ISTANBUL</p>
                        </div>
                        <div className="flex gap-18">
                            <h4 className="font-bold text-def-gray-800 dark:text-white">{t("education")}</h4>
                            <p className="text-def-gray-600 dark:text-white w-47">{t("edu")}</p>
                        </div>
                        <div className="flex gap-3">
                            <h4 className="font-bold text-def-gray-800 dark:text-white">{t("position")}</h4>
                            <p className="text-def-gray-600 dark:text-white">{t("posi")}</p>
                        </div>
                    </div>
                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila">{t("about")}</h3>
                        <p className="text-def-gray-500 dark:text-white">{t("profile_desc")} <br /><br />
                            {t("profile_desc1")}</p>
                    </div>
                </div>
                <hr className="text-def-indigo-700  dark:text-def-lila" />
            </section>
        </>
    )
}