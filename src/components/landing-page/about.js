import React, {Component} from 'react';
import Portfolio from "./portfolio";

export default class about extends Component{
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
                                            <h3 className="title">About me</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description text-center">
                                <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="profile-tabs">
                                        <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                                                    <i className="fas fa-camera-retro"> </i> Works
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                                                    <i className="fas fa-microchip"> </i> Tech stuff (Under construction)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Portfolio/>
                        </div>
                    </div>
                </div>
        );
    }
}