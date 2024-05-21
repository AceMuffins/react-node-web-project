import React from "react";
import { useState } from "react";



const Post = ({ contents }) => {
    const [stylePost, setStylePost] = useState("");
    
    function test() {
        stylePost == "" ? setStylePost("opened") : setStylePost("");
    }

    function shortenText(text){
        const len = 300;
        if(stylePost == "opened"){
            return text;
        }
        return text.length > len ? text.substring(0, len-3) + "..." : text;
    }
    
    return(
        <div className={`post ${stylePost}`} onClick={test}>
            <h2 className="title">{contents.title}</h2>
            <div className="text-wrapper">
                <h2 className="text">{shortenText(contents.text)}</h2>
            </div>
        </div>
    );
}

export default Post;