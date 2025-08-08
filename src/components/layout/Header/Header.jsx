import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {FaWhatsapp, FaTelegram, FaChevronDown, FaTimes} from 'react-icons/fa';
import "./Header.css"
import LanguageSwitcher from '../../../components/ui/LanguageSwitcher/LanguageSwitcher.jsx'; // Ваш компонент переключателя языка
import {motion, AnimatePresence} from "framer-motion";

const Header = () => {
    const {t} = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const servicesRef = useRef(null);

    // Обработчик скролла для изменения фона
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Закрытие выпадающего списка при клике вне области
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Запрет прокрутки при открытом попапе
    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isPopupOpen]);

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика отправки формы
        setIsPopupOpen(false);
        alert(t('header.applicationSent'));
    };

    return (
        <>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            <header
                className={`header fixed top-0 left-0 w-full z-45  transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white text-gray-900 shadow-md'
                        : 'bg-white/20 text-gray-300 backdrop-blur-sm'
                }`}
            >
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    {/* Логотип */}
                    <div className="flex items-center">
                        <div className="text-xl font-bold mr-2">LOGO</div>

                    </div>

                    {/* Навигация для десктопа */}
                    <nav className="hidden lg:flex text-xl items-center space-x-8">
                        <a
                            href="#about"
                            className="hover:text-white transition-colors"
                        >
                            {t('header.about')}
                        </a>

                        <div className="relative" ref={servicesRef}>
                            <button
                                className="flex text-xl items-center hover:text-white transition-colors"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                {t('header.services')}
                                <FaChevronDown className={`ml-1 transition-transform ${
                                    isServicesOpen ? 'rotate-180' : ''
                                }`}/>
                            </button>

                            {isServicesOpen && (
                                <div
                                    className="absolute text-xl top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                                    <a
                                        href="#cultural"
                                        className="block px-4 text-xl py-2 hover:bg-gray-100 text-gray-900"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {t('services.culture')}
                                    </a>
                                    <a
                                        href="#nature"
                                        className="block text-xl px-4 py-2 hover:bg-gray-100 text-gray-900"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {t('services.nature')}
                                    </a>
                                    <a
                                        href="#extreme"
                                        className="block text-xl px-4 py-2 hover:bg-gray-100 text-gray-900"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {t('services.extreme')}
                                    </a>
                                </div>
                            )}
                        </div>

                        <button
                            className="hover:text-white text-xl transition-colors"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            {t('header.application')}
                        </button>
                    </nav>
                    {/* Контакты и соцсети для десктопа */}
                    <div className="hidden lg:flex items-center space-x-6">
                    <LanguageSwitcher/>
                        <a
                            href="tel:+74953333333"
                            className="font-medium text-xl hover:text-white transition-colors"
                        >
                            +7 (495) 333-33-33
                        </a>

                        <div className="flex space-x-4">
                            <a
                                href="https://wa.me/74953333333"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-xl w-8 h-8"/>
                            </a>
                            <a
                                href="https://t.me/premium_tourism"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="Telegram"
                            >
                                <FaTelegram className="text-xl w-8 h-8"/>
                            </a>

                        </div>
                    </div>

                    {/* Кнопка меню для мобильных */}
                    <button
                        className="lg:hidden text-xl"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* Мобильное меню */}

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{x: '100%'}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{type: 'tween', duration: 0.3}}
                        className="fixed top-0 right-0 h-1/2 w-64 bg-white/95 backdrop-blur-sm rounded-l-2xl text-gray-900 z-50 shadow-xl lg:hidden"
                    >
                        <div className="p-4 flex justify-end">
                            <button
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <FaTimes className="text-xl"/>
                            </button>
                        </div>

                        <nav className="flex flex-col p-4 space-y-4">
                            <a
                                href="#about"
                                className="py-2 border-b border-gray-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                {t('header.about')}
                            </a>

                            <div className="py-2 border-b border-gray-200">
                                <button
                                    className="w-full flex justify-between items-center"
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                >
                                    {t('header.services')}
                                    <FaChevronDown className={`transition-transform ${
                                        isServicesOpen ? 'rotate-180' : ''
                                    }`}/>
                                </button>

                                {isServicesOpen && (
                                    <div className="mt-2 ml-4 space-y-2">
                                        <a
                                            href="#cultural"
                                            className="block py-1"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {t('services.culture')}
                                        </a>
                                        <a
                                            href="#nature"
                                            className="block py-1"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {t('services.nature')}
                                        </a>
                                        <a
                                            href="#extreme"
                                            className="block py-1"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {t('services.extreme')}
                                        </a>
                                    </div>
                                )}
                            </div>

                            <button
                                className="text-left py-2 border-b border-gray-200"
                                onClick={() => {
                                    setIsPopupOpen(true);
                                    setMenuOpen(false);
                                }}
                            >
                                {t('header.application')}
                            </button>

                            <a
                                href="tel:+74953333333"
                                className="py-2 border-b border-gray-200 font-medium"
                            >
                                +7 (495) 333-33-33
                            </a>

                            <div className="flex space-x-4 pt-2">
                                <a
                                    href="https://wa.me/74953333333"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp className="text-xl"/>
                                </a>
                                <a
                                    href="https://t.me/premium_tourism"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                    aria-label="Telegram"
                                >
                                    <FaTelegram className="text-xl"/>
                                </a>
                            </div>
                            <LanguageSwitcher/>
                        </nav>
                    </motion.div>

                )}

            </AnimatePresence>
            {/* Попап с анкетой */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full shadow-xl">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">{t('header.applicationForm')}</h3>
                                <button
                                    onClick={() => setIsPopupOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    aria-label="Close"
                                >
                                    <FaTimes/>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('form.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('form.message')}
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    {t('form.submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
