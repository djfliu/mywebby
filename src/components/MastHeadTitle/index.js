import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { STRINGS } from '../../resources/strings';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom'

const linkFont = {
        fontSize: '2em'
};

const MastHeadTitle = () => (
    <div className="container text-center my-auto" >
            <h1 className="mb-1 titleFont">{STRINGS.mastHeadTitle}</h1>
            <div className="mb-5 h4 titleFont">
                <span>I'm a </span>
                <ReactTypingEffect 
                    text={["Photographer", "Software Engineer", "Entrepreneur", "Learn more about me below!"]} 
                    speed={100}
                    eraseSpeed={100}
                    typingDelay={1000}
                    eraseDelay={2000}
                />
            </div>
            <ul className="list-inline mb-5">
                    <li className="list-inline-item me-3">
                            <a className="text-black-50" href="https://www.instagram.com/dannyjfliu/" style={linkFont}>
                                    <i className="icon-social-instagram" />
                            </a>
                    </li>
                    <li className="list-inline-item me-3">
                            <a className="text-black-50" href="https://www.linkedin.com/in/danny-liu-b6y4u56u56/" style={linkFont}>
                                    <i className="icon-social-linkedin" />
                            </a>
                    </li>
                    <li className="list-inline-item">
                            <a className="text-black-50" href="https://github.com/djfliu" style={linkFont}>
                                    <i className="icon-social-github" />
                            </a>
                    </li>
            </ul>
        <Row className="justify-content-center mb-4">
            <Link to='/works'>
                <Button variant="primary" className="rounded">My works</Button>
            </Link>
        </Row>

            <a className="scroll-down" href="#about" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>
                <i className="fas fa-long-arrow-alt-down fa-3x"/>
            </a>
    </div>
);

export { MastHeadTitle };

export default React.memo(MastHeadTitle);