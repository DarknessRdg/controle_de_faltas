import React from "react";
import "./styles.css";


const CourseName = () => (
    <div className="vh relative">
        <div className="course-title">    
            <h1>Curso de Lógica de Programação</h1>
            <p>com <strong> Scratch </strong>,  <strong>Python</strong> e <strong>Arduino</strong></p>
        </div>
        <div className="center down hide-on-med-and-down">
            <a href="#about"><i className="medium material-icons cyan-text text-accent-4">expand_more</i></a>
        </div>
    </div>
);

export default CourseName;