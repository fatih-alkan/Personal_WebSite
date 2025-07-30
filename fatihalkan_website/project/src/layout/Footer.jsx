import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone } from 'react-icons/fi';
export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="h-80 pt-16 bg-[#F9F9F9] dark:bg-black">
                <div className="flex flex-col max-w-6xl gap-16 m-auto">
                    <h2 className="font-bold text-4xl w-xl dark:text-def-baslik-dark">{t("letsWork")}</h2>
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col gap-4'>
                        <a href="mailto:fatihalkansw@gmail.com" className="text-def-red text-xl flex gap-4 items-center dark:text-def-lila"><span className='text-amber-400'><FiMail/></span> fatihalkansw@gmail.com</a>
                        <a href="tel:+905383987904" className="text-def-red text-xl flex gap-4 items-center dark:text-def-lila"><span className='text-amber-400'><FiPhone/></span> 0538 398 79 04</a>
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