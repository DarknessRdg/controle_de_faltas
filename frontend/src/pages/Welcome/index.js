import React from "react";
import User from "../../routes/user"
import Particles from "react-particles-js";
import "./styles.css";

import { styles, params, interactivity } from "./particles";
import Navbar from "../Navbar";
import CourseName from "./CourseName";
import About from "./About";
import Teachers from "./Teachers";
import redirect from "../../routes/redirect";


const Welcome = () => {
    if (User.isAuthenticated())
        redirect('/home')
    return (
    <div className="welcome" id="particles-js">
        <Particles
            params={params}
            style={styles}
            interactivity={interactivity}
        />

        <Navbar />
        <div className="clearfix"></div>
        <CourseName />

        <About />

        <Teachers />
        
    </div>
);}


export default Welcome;
