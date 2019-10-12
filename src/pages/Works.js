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
import SingleImage from "../components/SingleImage";


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
                        <SingleImage src={Plane}/>
                        <SingleImage src={Church}/>
                        <SingleImage src={Reflection}/>
                        <SingleImage src="https://public.adobecc.com/files/1UF5SE3355V0U20YF4NYRNAJTAPEFF"/>
                        <SingleImage src={LandScape}/>
                        <SingleImage src={Palace}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </WorksPageElm>

    )
}

