import React from 'react';
import "./footer.styles.scss"


const Footer = () => {
    return (
        <div className="footer__start">
            <div className="footer__top">
                <div className="update">
                    <h1>Need updates on latest jobs?</h1>
                    <p>sign up to get the latest updates</p>
                </div>
                <div className="update__form">
                    <form action="">
                        <input type="email" name="" placeholder="Enter Valid Email Address"/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="info">
                    <h3>Viroke</h3>
                    <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Aperiam qui ducimus <br/> temporibus harum laboriosam quidem <br/> doloribus facere molestias? Minima, <br/> reprehenderit!</p>
                </div>
                <div className="info__list">
                    <h3>The Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Success Stories</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="info__list">
                    <h3>Connect</h3>
                    <ul>
                        <li>Link</li>
                        <li>Refer a friend</li>
                    </ul>
                </div>
            </div>
            <footer></footer>
        </div>
    );
}

export default Footer;