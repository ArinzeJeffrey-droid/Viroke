import React from "react"
import "./nav-bar.styles.scss"
import NavLinks from "../nav-links/nav-links.component"
import BgImage from "../../assets/image/nav_cusBg.PNG"


const Navbar = () => {
    return(
        <nav className="nav__container" style={{backgroundImage:`url(${BgImage})`}}>
            <div className="brand__logo">
                <div className="logo">logo goes here</div>
            </div>
            <NavLinks/>
        </nav>
    )
}

export default Navbar