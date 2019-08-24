import React, {Component} from 'react';

export default class footer extends Component{
    render(){
        return(
            <div>
                <section className="content-section bg-primary text-white">
                    <div className="container text-center">
                        <h2 className="mb-4">The buttons below are impossible to resist...</h2>
                        <a href="#" className="btn btn-xl btn-light mr-4">Click Me!</a>
                        <a href="#" className="btn btn-xl btn-dark">Look at Me!</a>
                    </div>
                </section>
                {/* Footer */}
                <footer className="footer text-center">
                    <div className="container">
                        <ul className="list-inline mb-5">
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="#">
                                    <i className="icon-social-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="#">
                                    <i className="icon-social-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white" href="#">
                                    <i className="icon-social-github" />
                                </a>
                            </li>
                        </ul>
                        <p className="text-muted small mb-0">Copyright © Dannyjfliu 2019</p>
                    </div>
                </footer>
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
            </div>
        );
    }
}