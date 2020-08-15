import React from 'react';
import "./landing-banner.styles.scss"
import LandingImg from "../../assets/image/nav_bg2.png"
import AppleLogo from "../../assets/image/appstore@2x.png"
import GoogleLogo from "../../assets/image/google-play@2x.png"
import ScreenShot from "../../assets/image/Group-292@2x.png"



const LandingBanner = () => {
    return (
        <div className="landing__banner" style={{backgroundImage: `url(${LandingImg})`}}>
            <div className="landing__intro">
                <div className="landing__inner">
                    <div className="landing__text">
                        <div className="intro__header">
                            <h1>Video chat <br/> 
                            your favorite <br/> 
                            celebrity</h1>
                        </div>
                        <div className="intro__description">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fugiat omnis itaque et eius, nemo alias enim quibusdam eaque natus voluptatibus ipsum quisquam maiores rem dignissimos odit in eum, delectus repellendus laborum. Quidem earum nostrum facere.</p>
                        </div>
                        <div className="download__app">
                            <div className="app__box">
                                <img src={GoogleLogo} alt=""/>
                            </div>
                            <div className="app__box">
                                <img src={AppleLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="landing__img">
                        <img src={ScreenShot} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingBanner;