import React from 'react';
import "./landing-img.styles.scss"
import ScreenShot from "../../assets/image/Group-292@2x.png"
import AppleLogo from "../../assets/image/appstore@2x.png"
import GoogleLogo from "../../assets/image/google-play@2x.png"


const LandingImg = () => {
    return (  
        <div>
            <div className="container">
                <div className="img__container">
                    <img src={ScreenShot} alt=""/>
                </div>
            </div>
            <div className="overlap">
                <div className="box"></div>
                <div className="ad__box">
                    <div className="host">
                        <h1>Want to host a session?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse voluptatibus ut tempora sapiente adipisci, consequuntur quos </p>
                        <button>Request An Invite</button>
                    </div>
                    <div className="get__started">
                        <h1>Ready To Get Started?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse voluptatibus ut tempora sapiente adipisci, consequuntur quos </p>
                        <div className="app__box">
                            <div className="boxes">
                                <img src={GoogleLogo} alt=""/>
                            </div>
                            <div className="boxes">
                                <img src={AppleLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingImg;