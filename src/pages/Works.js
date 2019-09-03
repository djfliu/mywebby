import React, {Component} from 'react';
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { CSSTransition } from 'react-transition-group';
import '../styles/worksStyle.css'
import SlidingAnimations from "../slidingAnim";
import styled from "styled-components";


const Page = styled.div`
`;

const WorksPageElm = styled(Page)`
  &.page-enter {
    animation: ${SlidingAnimations.slideInRight} 0.4s forwards;
  }
  &.page-exit {
    animation: ${SlidingAnimations.slideOutRight} 0.4s forwards;
  }
`;

export default function Works(){
    return (
        <WorksPageElm>
            <div>
                <Sidebar/>
                <div className="container">
                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">My "Work"</h1>
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">The assorted collection</h1>
                            <p className="lead text-muted">The album below is an assorted collection of portraits, landscape, nature and travel photos that I have taken this past year.</p>
                        </div>
                    </section>
                    <div className="row text-center text-lg-left">
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://public.adobecc.com/files/1UF5SE3355V0U20YF4NYRNAJTAPEFF" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/AvhMzHwiE_0/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/2gYsZUmockw/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://public.adobecc.com/files/1UAVSCT1NML1WPOLAQ5MVX1TR5BEFF" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/8mUEy0ABdNE/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/G9Rfc1qccH4/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aJeH0KcFkuc/400x300" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 work-img">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </WorksPageElm>

    )
}

