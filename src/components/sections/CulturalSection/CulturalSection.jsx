import React from 'react';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import './CulturalSection.css';
import img1 from './dostup.png';
import img2 from './muzeidvor.png';
import img3 from './water.png';
import img4 from './ysypovskie.png';
import img5 from './zagorod.png';

function CulturalLeisure() {
    const {t} = useTranslation();

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
        hidden: {opacity: 0, y: 50},
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

    return (
        <section className='cultural-leisure py-16 px-4'>
            <div className='container mx-auto'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                    variants={textVariants}
                    className="text-end max-w-7xl ml-auto mb-16"
                >
                    <h2 className="h1_mod_size text-black mb-6">
                        {t("culturalLeisure.title")}
                    </h2>
                    <p className="text_mod_size-normal text-gray-700">
                        {t("culturalLeisure.description")}
                    </p>
                </motion.div>

                {/* Сетка изображений */}
                <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto">
                    {/* Первый столбец (2 картинки) */}

                    <motion.div
                        className="relative overflow-hidden rounded-xl group h-full"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img1}
                            alt={t("culturalLeisure.img1Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("culturalLeisure.img1Title")}
                            </h3>
                        </div>
                    </motion.div>
                    {/* Второй столбец (1 картинка на 2 строки) */}
                    <motion.div
                        className="relative overflow-hidden rounded-xl group row-span-2"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img3}
                            alt={t("culturalLeisure.img3Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("culturalLeisure.img3Title")}
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden rounded-xl group h-full"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img2}
                            alt={t("culturalLeisure.img2Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("culturalLeisure.img2Title")}
                            </h3>
                        </div>
                    </motion.div>


                    {/* Третий столбец (2 картинки) */}

                    <motion.div
                        className="relative overflow-hidden rounded-xl group h-full"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img4}
                            alt={t("culturalLeisure.img4Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("culturalLeisure.img4Title")}
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden rounded-xl group h-full"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img5}
                            alt={t("culturalLeisure.img5Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("culturalLeisure.img5Title")}
                            </h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default CulturalLeisure;