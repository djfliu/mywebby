import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { MastHeadTitle } from "../MastHeadTitle";
import { STRINGS } from '../../resources/strings';
import Typist from "react-typist";

const padding = {
    paddingBottom: '2em'
};

const linkFont = {
    fontSize: '2em'
};


export default class masthead extends Component {
    render(){
        return (
            <header className="masthead d-flex">
               <MastHeadTitle/>
                <div className="overlay" />
                <a className="scroll-down" href="#page-top">
                    <i className="fas fa-long-arrow-alt-down fa-3x"></i>
                </a>
            </header>
        )
    }
}

