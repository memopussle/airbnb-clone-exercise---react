import React from "react";
import logo from "../img/logo.png"; // have to import logo png from img to use it



function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} alt="logo airbnb"/>
        </nav>
    )
}

export default Navbar;