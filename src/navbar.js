import React from "react";
import hamburger from "./hamburger";
import "./navbar.css";





function Nav(){
    return (
        <navbar className="nav">
            <div className="menu"></div>
            <div>
                <img style={{cursor:"pointer",height:"60px",width:"auto"}}
                src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                height="60px"
                alt="logo"
                />
            </div>   





            
        </navbar>
    );

}

export default Nav;