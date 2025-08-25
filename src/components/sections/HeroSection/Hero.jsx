import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content text_style-white">
                    <h1 className="hero-title h1_mod_size ">
                        <span>{t("hero.title")}</span>
                        <br />
                        <span>{t("hero.title1")}</span>
                    </h1>
                    <p className="hero-subtitle text_mod_size-normal text_style-white">{t("hero.subtitle")}</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;