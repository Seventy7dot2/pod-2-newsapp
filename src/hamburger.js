import React from "react";
import  "./hamburger.css";


function ham(){
    return (
        <nav>
            <div class="openMenu"><i class="fa fa-bars"></i></div>
            <div class="logo"><img src=""></img></div>
            <ul class="mainMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <div class="closeMenu"><i class="fa fa-times"></i></div>
                <span class="icons">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-github"></i>
                </span>
            </ul>
        </nav>
    );

}
