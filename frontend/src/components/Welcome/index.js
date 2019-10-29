import React from "react";
import Particles from "react-particles-js";
import "./styles.css";

import {styles, params, interactivity} from "./particles";
import Navbar from "../Navbar";


const Welcome = () => (
    <div className="welcome" id="particles-js">
        <Particles 
            params={params}
            style={styles}
            interactivity={interactivity}
        />

        <Navbar />
        
        <div className="course-title">    
            <h1>Curso de Lógica de Programação</h1>
            <p>com <strong> Scratch </strong>,  <strong>Python</strong> e <strong>Arduino</strong></p>
        </div>
    </div>
);


export default Welcome
