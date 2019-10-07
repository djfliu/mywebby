import React, {Component} from "react";

import { MastHeadTitle } from "../MastHeadTitle";

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

