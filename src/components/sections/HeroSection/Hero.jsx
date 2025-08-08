import React from 'react';
import './Hero.css';
import {useTranslation, Trans} from 'react-i18next';

function Hero() {
    const {t} = useTranslation();
    return (<section className='hero flex items-center justify-end text-[#D3D3D3]'>
        <div className='container mx-auto justify-items-end-safe' >
            <div className='justify-items-end-safe max-w-2xl hero-content '>
                <h1 className="h1_mod_size text-[D3D3D3]  text-right">
                    <span>{t("hero.title")}</span>
                    <br/>
                    <span>{t("hero.title1")}</span></h1>
                <p className="text_mod_size-normal text-right text_style-white mt-11 ">{t("hero.subtitle")}</p>
            </div></div>

    </section>);
}

export default Hero;
