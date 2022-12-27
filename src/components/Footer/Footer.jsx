import React from 'react'
import './Footer.scss'
import twitter from "../../images/icon-twitter.svg"
import facebook from "../../images/icon-facebook.svg"
import instagram from "../../images/icon-instagram.svg"
import pinterest from "../../images/icon-pinterest.svg"

import logo from "../../images/logo.svg"

export const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="" />
        <div className='footer-content'>
            <div className='footer'>
                <h4>Feactures</h4>
                <ul>
                <li>Link Shortering</li>
                <li>Branded Links</li>
                <li>Analitics</li>
                </ul>
            </div>
            <div className='footer'>
                <h4>Resources</h4>
                <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
                </ul>
            </div>
            <div className='footer'>
                <h4>Company</h4>
                <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='socia-media'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={pinterest} alt="" />
        </div>
    </footer>
    )
}
