import React, {useState} from "react";

import "./styles.css";
import Login from "../../components/Login";


const Navbar = () => {
    const [login, setLogin] = useState([]);

    const openLogin = (e) => {
        setLogin(<Login isOpen={true}/>)
    }
    
    return (
        <>
        <nav className="navbar">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo grey-text text-darken-4">Curso <i className="material-icons">code</i> </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#about" className="grey-text text-darken-4">Sobre</a></li>
                    <li><a href="#teachers" className="grey-text text-darken-4">Professores</a></li>
                    <li><a 
                        href="#login" 
                        onClick={openLogin} 
                        className="modal-trigger grey-text text-darken-4">Login</a></li>
                </ul>
            </div>
        </nav>
        {login}
        </>
    )
};


export default Navbar
