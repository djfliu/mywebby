import React from 'react';
import Typist from 'react-typist';
import { STRINGS } from '../../resources/strings';
import {Link} from "react-router-dom";
import SmallText from "../Text/SmallText";

const linkFont = {
        fontSize: '2em'
};


export const MastHeadTitle = () => (
    <div className="container text-center my-auto" >
            <Typist cursor={{show:false}}>
                    <h1 className="mb-1 titleFont">{STRINGS.mastHeadTitle}</h1>
            </Typist>
            <Typist className="mb-5 h4 titleFont">
                    <Typist.Delay ms={2000}/>
                    <span>I'm a </span>
                    <span>Photographer</span>
                    <Typist.Backspace count={'Photographer'.length} delay={1000} />
                    <span>Software Engineer</span>
                    <Typist.Backspace count={'I\'m a Software Engineer'.length} delay={1000} />
                    <span>and an Entrepreneur!</span>
                    <Typist.Backspace count={'and an Entrepreneur!'.length} delay={1000} />
                    <span>Learn more about me below!</span>
            </Typist>
            <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                            <a className="text-black-50 mr-3" href="https://www.instagram.com/dannyjfliu/" style={linkFont}>
                                    <i className="icon-social-instagram" />
                            </a>
                    </li>
                    <li className="list-inline-item">
                            <a className="text-black-50 mr-3" href="https://www.linkedin.com/in/danny-liu-b6y4u56u56/" style={linkFont}>
                                    <i className="icon-social-linkedin" />
                            </a>
                    </li>
                    <li className="list-inline-item">
                            <a className="text-black-50" href="https://github.com/djfliu" style={linkFont}>
                                    <i className="icon-social-github" />
                            </a>
                    </li>
            </ul>
        <SmallText text='Learn more'/>
            <a className="scroll-down" href="#page-top">
                <i className="fas fa-long-arrow-alt-down fa-3x"/>
            </a>
    </div>
);