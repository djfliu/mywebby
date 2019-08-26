import React, {Component} from 'react';

export default class portfolio extends Component{
    render(){
        return(
        <div id="carousel-example-2" className="carousel slide carousel-fade z-depth-1-half portfolio-layout" data-ride="carousel">
            {/*/.Indicators*/}
            {/*Slides*/}
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="view">
                        <img className="d-block w-100" src="https://public.adobecc.com/files/1UF5SE3355V0U20YF4NYRNAJTAPEFF" alt="2nd photo" />
                        <div className="mask rgba-black-light" />
                    </div>
                    <div className="carousel-caption justify-content-center align-items-center">
                        <h3 className="h3-responsive">PEOPLE</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                        <img className="d-block w-100" src="https://public.adobecc.com/files/1UKGTCAHFL5ZK2H1VH0NVDANPRCFFF" alt="../../public" />
                        <div className="mask rgba-black-light" />
                    </div>
                    <div className="carousel-caption">
                        <h3 className="h3-responsive">LANDSCAPE</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                        <img className="d-block w-100" src="https://public.adobecc.com/files/1UGMTOEJQX21COJLZAYIO5ZBMTSEFF" alt="Third slide" />
                        <div className="mask rgba-black-light" />
                    </div>
                    <div className="carousel-caption">
                        <h3 className="h3-responsive">TRAVEL</h3>
                    </div>
                </div>
            </div>
            {/*/.Slides*/}
            {/*Controls*/}
            <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
            {/*/.Controls*/}
        </div>

        );
    }
}