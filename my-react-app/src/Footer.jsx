import React from "react";
import BirdIcon from "./assets/bird-love.svg";

const text = "See You Space Cowboy...."

const Footer = () => {
    return(
        <>
            <div className="footer-gradient"></div>
            <div className='footer'>
                <div className="icon">
                    <img src={BirdIcon} alt="*"></img>
                </div>
                <h1 className="font-footer">{text}</h1>
            </div>
        </>
    );
}

export default Footer;