import React from 'react';
import Typist from 'react-typist';
import { STRINGS } from '../../resources/strings';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom'

const linkFont = {
        fontSize: '2em'
};

const buttonStyles = {
    borderRadius: '5px',
    backgroundColor: '#007bff'
}



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
        <Row className="justify-content-md-center mb-4">
            <Link to='/works'>
                <Button style={buttonStyles}>My works</Button>
            </Link>
        </Row>

            <a className="scroll-down" href="">
                <i className="fas fa-long-arrow-alt-down fa-3x"/>
            </a>
    </div>
);