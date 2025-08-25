import React from 'react';
import { motion } from 'framer-motion';
import './PreviewSection.css';
import { useTranslation } from 'react-i18next';
import balet from './balet.png';
import img1 from './image2.png';
import ermitajh from './ermitajh.png';
import petergof from './petergof.jpg';

function PreviewSection() {
    const { t } = useTranslation();

    // Анимации для изображений
    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
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
            transition: { duration: 0.3 }
        }
    };

    // Анимации для внутреннего изображения
    const imageInnerVariants = {
        hover: {
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    // Анимации для текста
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <section className='preview flex items-center py-16 px-4'>
            <div className='container mx-auto preview-content'>
                {/* Текстовый контент с анимацией */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                >
                    <h2 className="h1_mod_size max-w-7xl text-black mb-8">
                        {t("preview.title")}
                    </h2>
                    <p className="text_mod_size-normal max-w-5xl mb-12">
                        <span>{t("preview.description")}</span>
                    </p>
                </motion.div>

                {/* Сетка изображений с анимациями */}
                <div className="grid grid-cols-6  gap-4 mx-auto">


                    <motion.div
                        className="col-span-4 row-span-1 relative overflow-hidden rounded-xl group "
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageVariants}
                    >
                        <motion.img
                            src={balet}
                            alt={t("preview.altBalet")}
                            className="w-full h-full object-cover "
                            variants={imageInnerVariants}
                            whileHover="hover"
                        />
                        <h2 className=" absolute inset-0 h2_mod_size text-right group-hover:opacity-0 transition-opacity duration-300 text_color-white px-2 md:px-5 py-2">
                            {t("preview.altBalet")}
                            <br />
                            {t("preview.altBalet2")}
                        </h2>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        {/* Текстовый слой */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <p className="text_mod_size-normal text_color-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                                {t("preview.baletText")}
                            </p>
                        </div>
                    </motion.div>

                    {/* Вторая картинка */}
                    <motion.div
                        className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img1}
                            alt={t("preview.altCirk")}
                            className="w-full h-full object-cover "
                            variants={imageInnerVariants}
                            whileHover="hover"
                        />  <h2 className=" absolute inset-0 h2_mod_size text-right group-hover:opacity-0 transition-opacity duration-300 text_color-white px-2 md:px-5 py-2">
                        {t("preview.altCirk")}

                    </h2>
                        {/* Затемняющий слой - исправлено */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        {/* Текстовый слой */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <p className="text_mod_size-normal text_color-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                                {t("preview.cirkText")}
                            </p>
                        </div>
                    </motion.div>

                    {/* Третья картинка */}
                    <motion.div
                        className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageVariants}
                    >
                        <motion.img
                            src={ermitajh}
                            alt={t("preview.altErmitajh")}
                            className="w-full h-full object-cover "
                            variants={imageInnerVariants}
                            whileHover="hover"
                        />
                        <h2 className=" absolute inset-0 h2_mod_size text-right group-hover:opacity-0 transition-opacity duration-300 text_color-white px-2 md:px-5 py-2">
                            {t("preview.altErmitajh")}

                        </h2>
                        {/* Затемняющий слой - исправлено */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        {/* Текстовый слой */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <p className="text_mod_size-normal text_color-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                                {t("preview.ermitajhText")}
                            </p>
                        </div>
                    </motion.div>

                    {/* Четвертая картинка */}
                    <motion.div
                        className="col-span-4 row-span-1 relative overflow-hidden rounded-xl group"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageVariants}
                    >
                        <motion.img
                            src={petergof}
                            alt={t("preview.altPetergof")}
                            className="w-full h-full object-cover "
                            variants={imageInnerVariants}
                            whileHover="hover"
                        />
                        <h2 className=" absolute inset-0 h2_mod_size text-right group-hover:opacity-0 transition-opacity duration-300 text_color-white px-2 md:px-5 py-2">
                            {t("preview.altPetergof")}

                        </h2>
                        {/* Затемняющий слой - исправлено */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        {/* Текстовый слой */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <p className="text_mod_size-normal text_color-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                                {t("preview.petergofText")}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default PreviewSection;