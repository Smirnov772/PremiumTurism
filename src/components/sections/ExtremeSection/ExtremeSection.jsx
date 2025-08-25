import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ExtremeSection.css';
import img1 from './Rectangle 10.png';
import img2 from './Rectangle 12.png';
import img3 from './Rectangle 13.png';
import img4 from './Rectangle 14.png';
import img5 from './Rectangle 15.png';

// Компонент модального окна
const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div
                className="absolute inset-0 bg-black/70 bg-opacity-50"
                onClick={onClose}
            />

            <motion.div
                className="relative bg-white rounded-xl shadow-2xl max-w-[90vh] w-full max-h-[90vh] overflow-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 25 }}
            >
                <button
                    className="absolute top-1 right-4 text-gray-500 hover:text-gray-700 text-7xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <div className="p-8">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

function ExtremeSection() {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringGrid, setIsHoveringGrid] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Анимации для текста
    const textVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.7, ease: "easeOut"}
        }
    };

    // Анимации для изображений
    const imageVariants = {
        hidden: {opacity: 0, y: 20},
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.7,
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.03,
            transition: {duration: 0.3}
        }
    };

    // Обработчик движения мыши
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left - 50,
            y: e.clientY - rect.top - 30
        });
    };

    return (
        <section className='cultural-leisure py-16 px-4'>
            <div className='container mx-auto'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                    variants={textVariants}
                    className="text-start max-w-7xl mr-auto mb-16"
                >
                    <h2 className="h1_mod_size text-black mb-6">
                        {t("ExtremeSection.title")}
                    </h2>
                    <p className="text_mod_size-normal text-gray-700">
                        {t("ExtremeSection.description")}
                    </p>
                </motion.div>

                {/* Обертка сетки для отслеживания курсора */}
                <div
                    className="relative"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringGrid(true)}
                    onMouseLeave={() => setIsHoveringGrid(false)}
                >
                    {/* Сетка изображений */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto">
                        {/* Первый столбец (2 картинки) */}
                        <motion.div
                            className="relative overflow-hidden rounded-xl row-span-2 group h-full cursor-pointer"
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <motion.img
                                src={img1}
                                alt={t("ExtremeSection.img1Alt")}
                                className="w-full h-full object-cover min-h-[200px]"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            />
                            <div
                                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                            <div className="absolute inset-0 flex items-end z-20 p-2 md:p-6">
                                <h3 className="text-white md:text-3xl font-bold ">
                                    {t("ExtremeSection.img1Title")}
                                </h3>
                            </div>
                        </motion.div>

                        {/* Второй столбец (1 картинка на 2 строки) */}
                        <motion.div
                            className="relative overflow-hidden rounded-xl group cursor-pointer"
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <motion.img
                                src={img3}
                                alt={t("ExtremeSection.img3Alt")}
                                className="w-full h-full object-cover min-h-[200px]"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            />
                            <div
                                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                            <div className="absolute inset-0 flex items-end z-20 p-2 md:p-6">
                                <h3 className="text-white md:text-3xl font-bold ">
                                    {t("ExtremeSection.img3Title")}
                                </h3>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden rounded-xl  group h-full cursor-pointer"
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <motion.img
                                src={img2}
                                alt={t("ExtremeSection.img2Alt")}
                                className="w-full h-full object-cover min-h-[200px]"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            />
                            <div
                                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                            <div className="absolute inset-0 flex items-end z-20 p-2 md:p-6">
                                <h3 className="text-white md:text-3xl font-bold ">
                                    {t("ExtremeSection.img2Title")}
                                </h3>
                            </div>
                        </motion.div>

                        {/* Третий столбец (2 картинки) */}
                        <motion.div
                            className="relative overflow-hidden rounded-xl group h-full cursor-pointer"
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <motion.img
                                src={img4}
                                alt={t("ExtremeSection.img4Alt")}
                                className="w-full h-full object-cover min-h-[200px]"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            />
                            <div
                                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                            <div className="absolute inset-0 flex items-end z-20 p-2 md:p-6">
                                <h3 className="text-white md:text-3xl font-bold ">
                                    {t("ExtremeSection.img4Title")}
                                </h3>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden rounded-xl group h-full cursor-pointer"
                            custom={4}
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <motion.img
                                src={img5}
                                alt={t("ExtremeSection.img5Alt")}
                                className="w-full h-full object-cover min-h-[200px]"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            />
                            <div
                                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                            <div className="absolute inset-0 flex items-end z-20 p-2 md:p-6">
                                <h3 className="text-white md:text-3xl font-bold ">
                                    {t("ExtremeSection.img5Title")}
                                </h3>
                            </div>
                        </motion.div>
                    </div>

                    {/* Надпись "Подробнее" возле курсора - теперь ближе */}
                    {isHoveringGrid && !isModalOpen && (
                        <motion.div
                            className="absolute z-30 text-white text-xl px-3 py-1 border-2 border-amber-100 rounded-2xl shadow-lg pointer-events-none whitespace-nowrap"
                            style={{
                                left: mousePosition.x,
                                top: mousePosition.y ,
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 20
                                }
                            }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            {t("ExtremeSection.learnMore")}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Модальное окно */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-3xl font-bold text-gray-800">
                        {t("ExtremeSection.title")}
                    </h3>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600">
                            {t("ExtremeSection.modalContent1")}
                        </p>

                        <h4 className="text-xl font-semibold mt-6">
                            {t("ExtremeSection.modalSubtitle")}
                        </h4>

                        <ul className="list-disc pl-6 space-y-2 mt-3">
                            <li>{t("ExtremeSection.modalFeature1")}</li>
                            <li>{t("ExtremeSection.modalFeature2")}</li>
                            <li>{t("ExtremeSection.modalFeature3")}</li>
                            <li>{t("ExtremeSection.modalFeature4")}</li>
                        </ul>

                        <p className="text-gray-600 mt-6">
                            {t("ExtremeSection.modalContent2")}
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {t("ExtremeSection.closeModal")}
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    );
}

export default ExtremeSection;