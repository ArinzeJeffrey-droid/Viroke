import React from 'react';
import "./nav-links.styles.scss"


const NavLinks = () => {
    return (
        <div className="links__container">
            <ul className="nav__links">
                <li>
                    <a href="#" className="alt-link">Host A Session</a>
                </li>
                <li>
                    <a href="#">Download App</a>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;