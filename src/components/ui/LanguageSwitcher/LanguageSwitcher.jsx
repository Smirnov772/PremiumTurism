import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {FaChevronDown} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Определяем текущий язык
    const currentLanguage = i18n.language.split('-')[0];

    // Доступные языки
    const languages = [{code: 'ru', name: 'RUS'}, {code: 'en', name: 'ENG'}, {code: 'ar', name: 'العربية'}];

    // Находим текущий язык
    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

    // Закрытие при клике вне области
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Смена языка
    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    // Анимации
    const containerVariants = {
        closed: {
            backgroundColor: "rgba(255, 255, 255, 0)",
        }, open: {
            backgroundColor: "rgba(255, 255, 255, 1)", height: "auto",
        }
    };

    const dropdownVariants = {
        hidden: {
            opacity: 0, height: 0, y: -10
        }, visible: {
            opacity: 1, height: "auto", y: 0, transition: {
                type: "spring", damping: 20, stiffness: 300
            }
        }, exit: {
            opacity: 0, height: 0, y: -10, transition: {duration: 0.2}
        }
    };

    return (<motion.div
        className="relative w-min inline-block pr-6 m-0 text-left place-content-center rounded-md "
        ref={dropdownRef}
        // variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{duration: 0.3}}
        // whileHover={{backgroundColor: "rgba(255, 255, 255, 1)"}}
    >
        {/* Кнопка выбора языка */}
        <motion.button
            type="button"
            className="flex items-center justify-center md:text-gray-300  text-sm text-black focus:outline-none "
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            whileTap={{scale: 0.98}}
        >
            <div className="flex  items-center">
                <span className="">{currentLang.name}</span>
            </div>
            <motion.span
                animate={{rotate: isOpen ? 180 : 0}}
                transition={{duration: 0.2}}
            >
                <div className="w-4 h-4 mx-2"><FaChevronDown/></div>

            </motion.span>
        </motion.button>

        {/* Выпадающий список */}
        <AnimatePresence>
            {isOpen && (<motion.div
                className="absolute top-5 -left-1 rounded-md  bg-white"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="py-1" role="none">
                    {languages.map((lang) => (<motion.button
                        key={lang.code}
                        className={`flex items-center justify-center w-full px-4 py-3 text-sm  ${currentLanguage === lang.code ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
                        onClick={() => changeLanguage(lang.code)}
                        role="menuitem"
                        whileHover={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
                        whileTap={{scale: 0.97}}
                    >
                        {lang.name}
                    </motion.button>))}
                </div>
            </motion.div>)}
        </AnimatePresence>
    </motion.div>);
};

export default LanguageSwitcher;