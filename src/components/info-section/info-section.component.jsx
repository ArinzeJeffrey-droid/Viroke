import React from 'react';
import "./info-section.styles.scss"
import TopImage from "../../assets/image/Sessions Screen@2x.png"
import BottomImage from "../../assets/image/Home-1@2x.png"
import TopImage2 from "../../assets/image/Wallet@2x.png"
import BottomImage2 from "../../assets/image/Session Details@2x.png"


const InfoSection = () => {
    return (
        <div>
            <div className="section__container">
                <div className="first__section">
                    <div className="overlay__container">
                        <div className="top__image">
                            <img src={BottomImage} alt=""/>
                        </div>
                        <div className="bottom__image">
                            <img src={TopImage} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="second__section">
                    <div className="section__inner">
                        <h1>Discover or search your favorite celebrity</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fugiat omnis itaque et eius, nemo alias enim quibusdam eaque natus voluptatibus ipsum quisquam maiores rem dignissimos odit in eum, delectus repellendus laborum. Quidem earum nostrum facere.</p>
                    </div>
                </div>
            </div>
            <div className="section__container flex__layout">
                <div className="first__section">
                    <div className="overlay__container">
                        <div className="top__image">
                            <img src={BottomImage2} alt=""/>
                        </div>
                        <div className="bottom__image">
                            <img src={TopImage2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="second__section">
                    <div className="section__inner">
                        <h1>Join or book a chat session with them</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fugiat omnis itaque et eius, nemo alias enim quibusdam eaque natus voluptatibus ipsum quisquam maiores rem dignissimos odit in eum, delectus repellendus laborum. Quidem earum nostrum facere.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;