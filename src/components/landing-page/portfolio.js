import React, {Component} from 'react';

export default class portfolio extends Component{
    render(){
        return(
        <div id="carousel-example-2" className="carousel slide carousel-fade z-depth-1-half portfolio-layout" data-ride="carousel">
            {/*Indicators*/}
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-2" data-slide-to={0} className="active" />
                <li data-target="#carousel-example-2" data-slide-to={1} />
                <li data-target="#carousel-example-2" data-slide-to={2} />
            </ol>
            {/*/.Indicators*/}
            {/*Slides*/}
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="view">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg" alt="First slide" />
                        <div className="mask rgba-black-light" />
                    </div>
                    <div className="carousel-caption">
                        <h3 className="h3-responsive">This is the first title</h3>
                        <p>First text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(115).jpg" alt="Second slide" />
                        <div className="mask rgba-black-light" />
                    </div>
                    <div className="carousel-caption">
                        <h3 className="h3-responsive">Thir is the second title</h3>
                        <p>Secondary text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(108).jpg" alt="Third slide" />
                        <div className="mask rgba-black-light" />
                    </div>
                    <div className="carousel-caption">
                        <h3 className="h3-responsive">This is the third title</h3>
                        <p>Third text</p>
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