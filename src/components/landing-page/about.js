import React, {Component} from 'react';

export default class about extends Component{
    render(){
        return(
            <section className="content-section bg-dark" id="about">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>This part will talk about what I do</h2>
                            <p className="lead mb-5">This theme features a flexible, UX friendly sidebar menu and stock
                                photos from our friends at
                                <a href="https://unsplash.com/">Unsplash</a>!</p>
                            <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}