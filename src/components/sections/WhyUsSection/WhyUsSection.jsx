import React from 'react';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import './WhyUsSection.css';
import img1 from './dostup.png';
import img2 from './muzeidvor.png';
import img4 from './ysypovskie.png';

function WhyUsSection() {
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
                        {t("WhyUsSection.title")}
                    </h2>

                </motion.div>

                {/* Сетка изображений */}
                <div className="grid grid-cols-3 gap-4 mx-auto">
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
                            alt={t("WhyUsSection.img1Alt")}
                            className="w-full h-full object-cover min-h-[256px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-center z-20 p-4">
                            <h3 className="text-white md:text-3xl font-bold leading-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("WhyUsSection.img1Title")}
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
                            alt={t("WhyUsSection.img2Alt")}
                            className="w-full h-full object-cover min-h-[256px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-center z-20 p-4">
                            <h3 className="text-white md:text-3xl font-bold leading-6  group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("WhyUsSection.img2Title")}
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
                            alt={t("WhyUsSection.img3Alt")}
                            className="w-full h-full object-cover min-h-[256px]"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        />
                        <div
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex items-center z-20 p-4">
                            <h3 className="text-white md:text-3xl font-bold leading-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                {t("WhyUsSection.img3Title")}
                            </h3>
                        </div>
                    </motion.div>



                </div>
            </div>
        </section>
    );
}

export default WhyUsSection;