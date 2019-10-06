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
            </header>
        )
    }
}

