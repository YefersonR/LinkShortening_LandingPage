import React from 'react'
import "./Header.scss"
import logo from "../../images/logo.svg"
import menu from "../../images/menu.png"
import closeMenu from "../../images/CloseMenu.png"
import { useState } from 'react'

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const displayMenu = (e)=>{
        e.target.src = e.target.src === menu ? closeMenu : menu
        setShowMenu(!showMenu)
    }
  return (
        <div className="menu">
            <div className="menu-sections">
                <img src={logo}  alt="Shortly" />
                <div className={`menuLinks ${!showMenu ? " " : "show"}`}>

                    <div className="sections">
                        <h4 className="section">Feactures</h4>
                        <h4 className="section">Pricing</h4>
                        <h4 className="section">Resources</h4>
                    </div>
                    <div className="menu-buttons">
                        <button className="login">Login</button>
                        <button className="Sign">Sign Up</button>
                    </div>
                </div>
                    <img src={menu} className="menuResponsive" alt=""  onClick={displayMenu}/>
            </div>
        </div>  
    )
}
