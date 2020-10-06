import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/custom.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Home() {
    return (
        <div className="row bg justify-content-center">
            {/* Main panel centered */}
            <div className="col-xl-3 col-lg-5 col-md-6 col-sm-8 col-xs-12 text-center align-self-center">

                {/* Welcome text */}
                <div className="welcome">
                    <img className="profil-img border rounded-circle" src={require("../images/profil-round.png")} alt=""/>
                    <h2 className="simple-title">Welcome !</h2>
                    <p className="simple-text">I'm Thomas Bissay, a French developer and amateur photographer.
                        I mainly do street and landscape photography, since the end of 2019.
                    </p>
                    <p className="simple-text">I created this website in order to share with you my travel experiences, to present you the different
                        pictures I have the opportunity to take, and to collect your advices and feedbacks.
                    </p>
                    <p className="simple-text">Wishing to improve myself, do not hesitate to contact me, via my social networks or by mail !</p>

                    {/* Contact section + social media */}
                    <div className="row justify-content-center btnContainer">
                        <a href="https://www.instagram.com/thomasbissay/" target="_blank" rel="noopener noreferrer" className="btn-dark socialBtn">
                            <FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                        <a href="https://www.linkedin.com/in/thomas-bissay" target="_blank" rel="noopener noreferrer" className="btn-dark socialBtn">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> </a>
                        <NavLink to="/contact" className="btn-dark socialBtn"><FontAwesomeIcon icon="comment-dots" /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;