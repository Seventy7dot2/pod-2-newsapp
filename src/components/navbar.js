import React from "react";
import hamburger from "./hamburger";

function nav(){
    return (
        <div className="nav">
            <div className="menu">
                <hamburger setCategory={setCategory}></hamburger>

            </div>

        <img style={{cursor:"pointer"}}
         src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
         height="80%"
         alt="logo"
        />





        </div>
    );
    
};

export default nav;  