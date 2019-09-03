import React, {Component} from 'react';
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { CSSTransition } from 'react-transition-group';
import '../styles/worksStyle.css'
import SlidingAnimations from "../slidingAnim";
import styled from "styled-components";

const Page = styled.div`
`;

const AboutPageElm = styled(Page)`
  &.page-enter {
    animation: ${SlidingAnimations.slideInRight} 0.4s forwards;
  }
  &.page-exit {
    animation: ${SlidingAnimations.slideOutRight} 0.4s forwards;
  }
`;

export default function About(){
    return(
        <AboutPageElm>
            <Sidebar/>
            {/* Page Content */}
            <div className="container">
                {/* Portfolio Item Heading */}
                <h1 className="my-4">
                    Page Heading
                </h1>
                {/* Portfolio Item Row */}
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src="http://placehold.it/750x500" alt="" />
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3">Project Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                        <h3 className="my-3">Project Details</h3>
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Dolor Sit Amet</li>
                            <li>Consectetur</li>
                            <li>Adipiscing Elit</li>
                        </ul>
                    </div>
                </div>
                {/* /.row */}
            </div>
            <Footer/>
        </AboutPageElm>
    )
}