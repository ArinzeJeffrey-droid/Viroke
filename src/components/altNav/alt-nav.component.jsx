import React from "react"
import "./altNav.styles.css"
import BgImage from "../../assets/image/nav_cusBg.PNG"


class AltNav extends React.Component {
    constructor(){
        super()
        this.state = {
            clicked: false
        }
    }
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return (
            <nav className="navbar__items" style={{backgroundImage:`url(${BgImage})`}}>
                <h3 className="navbar__logo">Viroke</h3>
                <div className="menu__icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : "fa fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? 'nav__menu active' : 'nav__menu'} style={this.state.clicked ? {backgroundImage:`url(${BgImage})` } : null}>
                    <li><a className="nav__links host-link" href="#">Host A Session</a></li>
                    <li><a className="nav__links" href="#">Download App</a></li>
                </ul>
            </nav>
        )
    }
}

export default AltNav;