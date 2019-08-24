import React, {Component} from "react";

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
                <div className="container text-center my-auto" >
                    <h1 className="mb-1">Hey, I'm Danny!</h1>
                    <h3 className="mb-1" style={padding}>
                        <em>I'm a Photographer & Tech Entrepreneur.</em>
                    </h3>
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="text-black-50 mr-3" href="https://www.instagram.com/dannyjfliu/" style={linkFont}>
                                <i className="icon-social-instagram" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-black-50 mr-3" href="#" style={linkFont}>
                                <i className="icon-social-linkedin" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-black-50" href="https://github.com/djfliu" style={linkFont}>
                                <i className="icon-social-github" />
                            </a>
                        </li>
                    </ul>
                     <a className="btn-rounded btn-primary btn-xl js-scroll-trigger font-weight-bold" href="#TODO">My work<i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="overlay" />
                <a className="scroll-down" href="#page-top">
                    <i className="fas fa-long-arrow-alt-down fa-3x"></i>
                </a>
            </header>
        )
    }
}

