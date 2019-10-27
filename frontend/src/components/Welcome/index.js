import React from "react";

import "./styles.css";

import Navbar from "../Navbar";


const Welcome = () => (
    <div className="welcome">
        <Navbar />
        <div className="course-title">
            <h1>Curso de Lógica de Programação</h1>
            <p>com <strong> Scratch </strong>,  <strong>Python</strong> e <strong>Arduino</strong></p>
        </div>
    </div>
);


export default Welcome
