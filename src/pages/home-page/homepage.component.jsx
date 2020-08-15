import React from 'react';
import LandingBanner from '../../components/landing-banner/landing-banner.component';
import InfoSection from '../../components/info-section/info-section.component';
import LandingImg from '../../components/landing-img/landing-img.component';
import Footer from '../../components/footer/footer.component';
import AltNav from '../../components/nav-bar/nav-bar.component';



const Homepage = () => {
    return (
        <div className="home__container">
        <AltNav/>
            <LandingBanner/>
            <InfoSection/>
            <LandingImg/>
            <Footer/>
        </div>
    );
}

export default Homepage;