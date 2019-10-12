import React from 'react'

export default class SingleImage extends React.Component {

    render() {
       return (
            <div className="col-lg-4 col-md-4 col-12 work-img">
                <a className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={this.props.src} alt="" />
                </a>
            </div>
        )
    }

}