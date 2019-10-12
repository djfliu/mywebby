import React from 'react';
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import '../styles/worksStyle.css'
import SlidingAnimations from "../slidingAnim";
import styled from "styled-components";
import LandScape from '../resources/imgs/works/landscape.jpg'
import Plane from '../resources/imgs/works/wizzair.jpg'
import Church from '../resources/imgs/works/church.jpg'
import Palace from '../resources/imgs/works/palace.jpg'
import Reflection from '../resources/imgs/works/reflection.jpg'


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
                    <section className="jumbotron text-center mt-2">
                        <div className="container">
                            <h1 className="jumbotron-heading">The assorted collection</h1>
                            <h6>1</h6>
                            <p className="lead text-muted">The album below is an assorted collection of portraits, landscape, nature and travel photos that I have taken this past year.</p>
                        </div>
                    </section>
                    <div className="row text-center text-lg-left">
                        <div className="col-lg-4 col-md-6 col-6 work-img">
                            <a className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src={Plane} alt="" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 work-img">
                            <a className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src={Church} alt="" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 work-img">
                            <a className="d-block mb-4 h-100">
                                <img className="img-thumbnail" src={Reflection} alt="" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 work-img">
                            <a className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://public.adobecc.com/files/1UF5SE3355V0U20YF4NYRNAJTAPEFF" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 work-img">
                            <a className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src={LandScape} alt="" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 work-img">
                            <a className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src={Palace} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </WorksPageElm>

    )
}

