import React from "react";
import icon from "./assets/icon.png";

const Project = () => {
    return(
        <>
            <div className="project-wrapper">
                <img className="project-icon" src={icon}></img>
                <p className="project-description">Project Name</p>
            </div>
        </>
    );
}

export default Project;