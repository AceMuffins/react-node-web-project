import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import BirdIcon from "./assets/bird-icon.svg";

var title = "Alex's Blog.";

const Header = () => {
    
    const [styleAboutMe, setStyleAboutMe] = useState("rolled");
    function unscrollAboutMe() {
        styleAboutMe == "rolled" ? setStyleAboutMe("unrolled") : setStyleAboutMe("rolled");
    }
    
    return(
        <>
            <div className='header'>
                <div className="icon">
                    <img src={BirdIcon} alt="*"></img>
                </div>
                <div className="title">
                    <h1 className="font-header">{title}</h1>
                </div>
                <div className="header-button">
                    <Link className="font-header button-header" to="/">Home</Link>
                </div>
                <div className="header-button">
                    <Link className="font-header button-header" to="/projects">My Projects</Link>
                </div>
                <div className="header-button">
                    <button className="font-header button-header" onClick={unscrollAboutMe}>About Me</button>
                </div>
            </div>
            <div className="header-gradient"></div>
            <div className={styleAboutMe + " about-me"} >
                <h1 className="font-about-me">Howdy, stranger.</h1>
                <p className="font-p">:p</p>
                <div classname="about-me-contents">
                    <p className="font-about-me-text">My name is Alex, I'm a 20 year old undergraduate CS student, studying in the Kyiv Polytechnic
                         Institute in Ukraine. This is a test blog website I used to learn ReactJS!</p>
                </div>
            </div>
        </>
    );
}

export default Header;