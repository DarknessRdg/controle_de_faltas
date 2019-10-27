import React from "react";

import "./styles.css";


const Navbar = () => (
    <nav className="navbar">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo grey-text text-darken-4">Curso</a>
            <ul id="nav-mobile" className="right">
                <li><a href="sass.html" className="grey-text text-darken-4">Sass</a></li>
                <li><a href="badges.html" className="grey-text text-darken-4">Components</a></li>
                <li><a href="collapsible.html" className="grey-text text-darken-4">Login</a></li>
            </ul>
        </div>
    </nav>
);


export default Navbar
