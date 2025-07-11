import React, { useState } from 'react';
import Portfolio from "./portfolio";
import TechSection from "../TechSection";
import { STRINGS } from "../../resources/strings";
import SmallText from "../Text/SmallText";
import Me from "../../resources/imgs/me.jpg"

const About = () => {
    const [showPortfolio, setShowPortfolio] = useState(true);
    
    return (
        <div className="main main-raised profile-page">
            <div className="profile-content">
                <div className="container bg-main">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <div className="profile">
                                <div className="avatar">
                                    <img src={Me} alt="Danny Liu profile" className="img-raised img-fluid" />
                                </div>
                                <div className="name">
                                    <h3 className="title">{STRINGS.aboutTitle}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SmallText
                        text={STRINGS.aboutme}
                    />
                    <div className="row mt-5">
                        <div className="col-md-6 ml-auto mr-auto">
                            <div className="profile-tabs">
                                <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <button className={`nav-link btn ${showPortfolio ? 'active' : ''}`} onClick={() => setShowPortfolio(true)} role="tab" data-toggle="tab">
                                            <i className="fas fa-camera-retro"> </i> {STRINGS.photographyLabel}
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link btn ${!showPortfolio ? 'active' : ''}`} onClick={() => setShowPortfolio(false)} role="tab" data-toggle="tab">
                                            <i className="fas fa-microchip"> </i> {STRINGS.techLabel}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {showPortfolio && <Portfolio/>}
                    {!showPortfolio && <TechSection/>}
                </div>
            </div>
        </div>
    );
};

export default React.memo(About);