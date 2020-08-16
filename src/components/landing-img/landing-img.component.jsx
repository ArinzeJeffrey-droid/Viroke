import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./landing-img.styles.scss"
import ScreenShot from "../../assets/image/Group-292@2x.png"
import AppleLogo from "../../assets/image/appstore@2x.png"
import GoogleLogo from "../../assets/image/google-play@2x.png"


const LandingImg = () => {
    return (
        <div className="container-fluid overlay__section">
            <div className="image__hidden">
                <img src={ScreenShot} alt=""/>
            </div>
            <div className="overlay__box container-fluid">
                <div className="overlay__inner row">
                    <div className="host-session col-md-6">
                        <h1>Want to host a session</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint dolorem doloribus dicta nam neque provident excepturi ut, fuga possimus.</p>
                        <button className="btn">Request an invite</button>
                    </div>
                    <div className="updates col-md-6">
                        <h1>Ready to get started</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint dolorem doloribus dicta nam neque provident excepturi ut, fuga possimus.</p>
                        <div className="app">
                            <div className="box">
                                <img src={GoogleLogo} alt=""/>
                            </div>
                            <div className="box">
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