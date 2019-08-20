import React, { Component } from "react";

export default class sidebar extends Component{
    render(){
        return (
            <div>
                <a className="menu-toggle rounded" href="#">
                    <i className="fas fa-bars" />
                </a>
                <nav id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#page-top">Home</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#services">Services</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}