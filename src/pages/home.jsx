import React from 'react';
import Header from "../components/layout/Header/Header.jsx";
import Hero from "../components/sections/HeroSection/Hero.jsx";
import PreviewSection from "../components/sections/previewSection/previewSection.jsx";
import CulturalLeisure from "../components/sections/CulturalSection/CulturalSection.jsx";
import OutdoorSection from "../components/sections/OutdoorSection/OutdoorSection.jsx";
import ExtremeSection from "../components/sections/ExtremeSection/ExtremeSection.jsx";
import WhyUsSection from "../components/sections/WhyUsSection/WhyUsSection.jsx";

function Home() {

    return (
        <div>
            <Header></Header>

                <Hero></Hero>
<PreviewSection></PreviewSection>
            <CulturalLeisure></CulturalLeisure>
            <OutdoorSection></OutdoorSection>
            <ExtremeSection></ExtremeSection>
            <WhyUsSection></WhyUsSection>

        </div>
    );
}

export default Home;
