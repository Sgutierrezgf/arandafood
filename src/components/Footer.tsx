import React from 'react'
import '../styles/Footer.scss'
import imgFooter from '../styles/imgs/imgFooter.png'



const Footer = () => {
    return (
        <div className="footer">
            <div className="textfooter"><span>Con el patrocinio de</span></div>
            <img className="imgFooter" src={imgFooter} alt='footer' />
        </div>
    )
}

export default Footer