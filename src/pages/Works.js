import React, {Component} from 'react';
import Sidebar from "../components/sidebar";
import { CSSTransition } from 'react-transition-group';
import '../styles/worksStyle.css'
import SlidingAnimations from "../slidingAnim";
import styled from "styled-components";


const Page = styled.div`
`;

const WorksPageElm = styled(Page)`
  background-color: #90caf9;
  &.page-enter {
    animation: ${SlidingAnimations.slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${SlidingAnimations.slideOutRight} 0.2s forwards;
  }
`;

export default function Works(){
    return (
        <WorksPageElm>
            <div>
                Works
                <Sidebar/>
            </div>
        </WorksPageElm>

    )
}

