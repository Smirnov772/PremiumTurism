import React from 'react';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import './OutdoorSection.css';
import img1 from './Rectangle 1.png';
import img2 from './Rectangle 10.png';
import img3 from './Rectangle 11.png';
import img4 from './Rectangle 12.png';
import img5 from './Rectangle 13.png';

function OutdoorSection() {
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
                    className="text-start max-w-7xl mr-auto mb-16"
                >
                    <h2 className="h1_mod_size text-black mb-6">
                        {t("OutdoorSection.title")}
                    </h2>
                    <p className="text_mod_size-normal text-gray-700">
                        {t("OutdoorSection.description")}
                    </p>
                </motion.div>

                {/* Сетка изображений */}
                <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto">
                    {/* Первый столбец (2 картинки) */}

                    <motion.div
                        className="relative overflow-hidden rounded-xl  group h-full"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img1}
                            alt={t("OutdoorSection.img1Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("OutdoorSection.img1Title")}
                            </h3>
                        </div>
                    </motion.div>
                    {/* Второй столбец (1 картинка на 2 строки) */}
                    <motion.div
                        className="relative overflow-hidden rounded-xl group "
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img3}
                            alt={t("OutdoorSection.img3Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("OutdoorSection.img3Title")}
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden rounded-xl row-span-2 group h-full"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img2}
                            alt={t("OutdoorSection.img2Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("OutdoorSection.img2Title")}
                            </h3>
                        </div>
                    </motion.div>


                    {/* Третий столбец (2 картинки) */}

                    <motion.div
                        className="relative overflow-hidden rounded-xl  group h-full"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={img4}
                            alt={t("OutdoorSection.img4Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("OutdoorSection.img4Title")}
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
                            alt={t("OutdoorSection.img5Alt")}
                            className="w-full h-full object-cover min-h-[200px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-end z-20 p-6">
                            <h3 className="text-white md:text-2xl font-medium group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("OutdoorSection.img5Title")}
                            </h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default OutdoorSection;