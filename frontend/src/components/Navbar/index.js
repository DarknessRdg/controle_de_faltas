import React from "react";

import "./styles.css";


const Navbar = () => (
    <nav className="navbar">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo grey-text text-darken-4">Curso <i className="material-icons">code</i> </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about" className="grey-text text-darken-4">Sobre</a></li>
                <li><a href="#teachers" className="grey-text text-darken-4">Professores</a></li>
                <li><a href="collapsible.html" className="grey-text text-darken-4">Login</a></li>
            </ul>
        </div>
        <div className="fixed-action-btn hide-on-med-and-up">
            <a className="btn-floating btn-samll  blue lighten-4  black-text center">Login</a>
        </div>
        
    </nav>
);


export default Navbar
