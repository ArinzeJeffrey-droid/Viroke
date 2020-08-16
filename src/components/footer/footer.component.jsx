import React from 'react';
import "./footer.styles.scss"


const Footer = () => {
    return (
        <div className="footer__container container-fluid">
            <div className="footer__top">
                <div className="footer__inner row">
                    <div className="need__update col-md-6">
                        <h1>Need updates on latest jobs?</h1>
                        <p>sign up to get the latest updates</p>
                    </div>
                    <div className="update__form col-md-6">
                        <form action="">
                        <input type="email" className="form-control" placeholder="Enter Valid Email"/>
                        <button className="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer__bottom mt-5">
                <div className="inner__bottom row">
                    <div className="footer-box col-md-4">
                        <h3>Viroke</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut est earum voluptate nisi sint quidem? Vitae distinctio non ex fugit dignissimos, maiores veritatis quidem quisquam ratione voluptatem perferendis pariatur sunt.</p>
                    </div>
                    <div className="footer-box col-md-4">
                        <h3>The Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Success Stories</li>
                            <li>About Us</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-box col-md-4">
                    <h3>Connect</h3>
                        <ul>
                            <li>Link</li>
                            <li>Refer A Friend</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;