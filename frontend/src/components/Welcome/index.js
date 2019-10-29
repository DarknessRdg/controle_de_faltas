import React from "react";
import Particles from "react-particles-js";
import "./styles.css";

import Navbar from "../Navbar";

const particleStyle = {
    width: '100%',
    color: '#000000',
    position: "absolute",
    top: "0"
}

const particleOptions = {
    particles: {
        number: {
            value: 50,
        },
        color: {
            value: "#000000"
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 1,
                color: '#878787'
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.4,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 400,
            color: "#000000",
            opacity: 0.1,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none"
        },
    }
}

const Welcome = () => (
    <div className="welcome" id="particles-js">
        <Navbar />
        <Particles 
                params={particleOptions}
                style={particleStyle}
            />
        <div className="course-title">
            
            <h1>Curso de Lógica de Programação</h1>
            <p>com <strong> Scratch </strong>,  <strong>Python</strong> e <strong>Arduino</strong></p>
        </div>
    </div>
);


export default Welcome
