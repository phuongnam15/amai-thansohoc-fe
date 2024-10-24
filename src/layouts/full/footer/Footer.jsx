import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="w-full">
            <div className="w-full h-20 bg-yellow-400">
                {t("Địa chỉ")}
            </div>
        </footer>
    )
}

export default Footer;