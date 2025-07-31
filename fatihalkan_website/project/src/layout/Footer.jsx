import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone } from 'react-icons/fi';
export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="h-80 pt-16 bg-[#F9F9F9] dark:bg-black w-full">
                <div className="flex flex-col max-w-6xl gap-16 m-auto max-laptop:max-w-3xl max-tablet:max-w-2xl max-phone:w-[300px]">
                    <h2 className="font-bold text-4xl w-xl dark:text-def-baslik-dark max-laptop:text-4xl max-tablet:text-3xl max-phone:text-xl max-phone:w-[240px]">{t("letsWork")}</h2>
                    <div className="flex justify-between items-center max-phone:flex-col max-phone:gap-8 max-phone:items-start">
                        <div className='flex flex-col gap-4'>
                        <a href="mailto:fatihalkansw@gmail.com" className="text-def-red text-xl flex gap-4 items-center dark:text-def-lila max-laptop:text-[16px]"><span className='text-amber-400'><FiMail/></span> fatihalkansw@gmail.com</a>
                        <a href="tel:+905383987904" className="text-def-red text-xl flex gap-4 items-center dark:text-def-lila max-laptop:text-[16px]"><span className='text-amber-400'><FiPhone/></span> 0538 398 79 04</a>
                        </div>
                        
                        <div className="flex gap-8">
                            <a href="https://github.com/fatih-alkan" className="text-def-green">Github</a>
                            <a href="https://www.linkedin.com/in/fatih-alkan-4b1026269/" className="text-def-blue">Linkedin</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}