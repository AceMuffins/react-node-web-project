import React from "react";

const NotFound = ({ contents }) => {
    return(
        <div className="notfound">
            <h2 className="font-about-me">Well, shucks.</h2>
            <h2 className="font-about-me">Looks like this page doesn't exist! Not yet, at least.</h2>
            <img src="https://http.cat/images/404.jpg"></img>
            <p className="font-notfound">How'd you even get here?</p>
        </div>
    );
}

export default NotFound;