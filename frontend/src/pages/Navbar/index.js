import React from "react";
import { Link } from 'react-router-dom'

import "./styles.css";


const Navbar = () => (
    <nav className="navbar">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo grey-text text-darken-4">Curso <i className="material-icons">code</i> </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about" className="grey-text text-darken-4">Sobre</a></li>
                <li><a href="#teachers" className="grey-text text-darken-4">Professores</a></li>
                <li><Link to="/login" className="grey-text text-darken-4">Login</Link></li>
            </ul>
        </div>
        <div className="fixed-action-btn hide-on-med-and-up">
            <Link to="/login" className="btn-floating btn-samll  blue lighten-4  black-text center">Login</Link>
        </div>
        
    </nav>
);


export default Navbar
