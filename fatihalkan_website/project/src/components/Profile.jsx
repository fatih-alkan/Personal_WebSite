import { useTranslation } from "react-i18next";

export default function Profile() {
    const { t } = useTranslation();
    return (
        <>
            <section className="flex flex-col max-w-6xl mx-auto mt-20 max-h-[770px] gap-12 dark:bg-def-gray-800 max-laptop:max-w-3xl max-tablet:max-w-2xl max-phone:w-[300px] ">
                <h3 className="text-5xl font-bold text-def-gray-800 dark:text-def-baslik-dark max-tablet:text-4xl">{t("profile")}</h3>
                <div className="flex gap-36 justify-center max-laptop:flex-row-reverse max-tablet:gap-12 max-phone:flex-col">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila max-tablet:text-2xl max-phone:text-xl">{t("profile")}</h3>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-4 w-32">
                                <h4 className="font-bold text-def-gray-800 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("dob")}</h4>
                                <h4 className="font-bold text-def-gray-800 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("address")}</h4>
                                <h4 className="font-bold text-def-gray-800 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("education")}</h4>
                                <h4 className="font-bold text-def-gray-800 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("position")}</h4>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-def-gray-600 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">19.08.2000</p>
                                <p className="text-def-gray-600 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">Umraniye/ISTANBUL</p>
                                <p className="text-def-gray-600 dark:text-white w-48 max-tablet:text-[12px] max-phone:text-[10px]">{t("edu")}</p>
                                <p className="text-def-gray-600 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("posi")}</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex-col flex gap-4">
                        <h3 className="text-3xl text-def-indigo-700 dark:text-def-lila max-tablet:text-2xl max-phone:text-xl">{t("about")}</h3>
                        <p className="text-def-gray-500 dark:text-white max-tablet:text-[12px] max-phone:text-[10px]">{t("profile_desc")} <br /><br />
                            {t("profile_desc1")}</p>
                    </div>
                </div>
                <hr className="text-def-indigo-700  dark:text-def-lila" />
            </section>
        </>
    )
}