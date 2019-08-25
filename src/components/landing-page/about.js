import React, {Component} from 'react';

export default class about extends Component{
    render(){
        return(
            <section className="content-section bg-dark" id="about">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>Are you a fitness instructor who's looking for studio space for your classes?</h2>
                            <p className="lead mb-5">Checkout OpenSpace. The largest selection of rental space online.
                                <a href="https://unsplash.com/">OpenSpace</a>!</p>
                            <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}