import React, {Component} from 'react';

export default class footer extends Component{
    render(){
        return(
            <div>
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