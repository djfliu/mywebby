import React from 'react';
import {STRINGS} from "../../../resources/strings";

export default class SmallText extends React.Component {

    render() {
        return (
            <div className="description text-center">
                <p>{this.props.text}</p>
            </div>
        )
    }
}