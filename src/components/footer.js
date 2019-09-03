import React, {Component} from 'react';

export default class footer extends Component{
    render(){
        return(
            <div>
                {/*   <section className="content-section bg-primary text-white">
                    <div className="container text-center">
                        <h2 className="mb-4">The buttons below are impossible to resist...</h2>
                        <a href="#" className="btn btn-xl btn-light mr-4">Click Me!</a>
                        <a href="#" className="btn btn-xl btn-dark">Look at Me!</a>
                    </div>
                </section>
                 Footer */}
                <div className="footer-basic">
                    <footer>
                        <div className="social">
                            <a href="#">
                                <i className="icon ion-social-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="icon ion-social-linkedin"></i>
                            </a>
                            <a href="#">
                                <i className="icon ion-social-github"></i>
                            </a>
                        </div>
                        <p className="copyright">Website designed and built by me! dannyjfliu © 2019</p>
                    </footer>
                </div>
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
            </div>
        );
    }
}