import React, {Component} from 'react';
import Portfolio from "./portfolio";
import TechSection from "../TechSection";
import {STRINGS} from "../../resources/strings";
import SmallText from "../Text/SmallText";

export default class about extends Component {

    constructor(props){
        super(props);
        this.state = {
            tabBool: true
        };
    }

    render(){
        return(
                <div className="main main-raised profile-page">
                    <div className="profile-content">
                        <div className="container bg-main">
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="profile">
                                        <div className="avatar">
                                            <img src="https://public.adobecc.com/files/1UF5SE3355V0U20YF4NYRNAJTAPEFF" alt="Circle Image" className="img-raised img-fluid" />
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
                                                <a className="nav-link active" onClick={() => this.setState({tabBool: true})} role="tab" data-toggle="tab">
                                                    <i className="fas fa-camera-retro"> </i> {STRINGS.photographyLabel}
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={() => this.setState({tabBool: false})} role="tab" data-toggle="tab">
                                                    <i className="fas fa-microchip"> </i> {STRINGS.techLabel}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {this.state.tabBool && <Portfolio/>}
                            {!this.state.tabBool && <TechSection/>}
                        </div>
                    </div>
                </div>
        );
    }
}