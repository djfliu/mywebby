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
                        <em>I am an aspiring Photographer & full-time Software Engineer.</em>
                    </h3>
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#" style={linkFont}>
                                <i className="icon-social-facebook" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#" style={linkFont}>
                                <i className="icon-social-twitter" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white" href="#" style={linkFont}>
                                <i className="icon-social-github" />
                            </a>
                        </li>
                    </ul>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                </div>
                <div className="overlay" />
            </header>
        )
    }
}

