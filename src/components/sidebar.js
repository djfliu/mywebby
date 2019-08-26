import React, { Component } from "react";
import Sidebar from "react-sidebar";
import {Link} from 'react-router-dom'


export default class sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render(){
        return (
            <Sidebar
                sidebar={
                    <b>
                        <div id="wrapper" className="vertical-center">
                            <img src="https://public.adobecc.com/files/1UPGSOOS3RO3O2XLRELBML4SK0SEFF" alt="logo" style={{width: "5em", height: "5em", margin: "0 0 0 2.7em"}}></img>
                            <nav id="sidebar">
                                <ul className="list-unstyled components text-center" id="sideBarText">
                                    <li>
                                        <a><i className="fas fa-user"></i><Link to="/works"> ABOUT ME</Link></a>
                                    </li>
                                    <li>
                                        <a href="#" ><i className="fas fa-camera"></i> MY WORK</a>
                                    </li>
                                    <li>
                                        <a href="#" ><i className="fas fa-user"></i> THE OPENSPACE APP</a>
                                    </li>
                                    <li>
                                        <a href="#" ><i className="far fa-address-card"></i> GET IN TOUCH</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="fixed-bottom">
                            <ul className="list-inline align-bottom text-center">
                                <li className="list-inline-item">
                                    <a className="text-white-50 mr-3" href="https://www.instagram.com/dannyjfliu/">
                                        <i className="icon-social-instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-white-50 mr-3" href="#">
                                        <i className="icon-social-linkedin" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-white-50" href="https://github.com/djfliu">
                                        <i className="icon-social-github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </b>

                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                pullRight={true}
                styles={{
                    sidebar: { background: "black", position: "fixed", width: "15em"},
                    content: {}
                }}
            >
                <div>
                    <a className="menu-toggle rounded" onClick={() => this.onSetSidebarOpen(true)}>
                        <i className="fas fa-bars text-white" />
                    </a>
                </div>
            </Sidebar>
        )
    }
}