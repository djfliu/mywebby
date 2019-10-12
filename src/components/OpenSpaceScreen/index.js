import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/es/Button";
import Logo from "../../resources/imgs/logo.png"
import {Image} from "react-bootstrap";

export default class OpenSpaceScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            submitted: false
        };
    }

    handleSubmission = (e) => {
        e.preventDefault()
        this.setState({submitted: true})
    }
    
    render(){
        return (
            <div className="main main-raised profile-page vertical-center" style={{width: '45%', marginRight: '50%', marginTop: '5%'}}>
                <div className="profile-content align-content-lg-start">
                    <div className="container bg-main">
                        <div className="row">
                            <div className="col-md-10 ml-auto mr-auto">
                                <div className='align-content-center' style={{margin: '2em'}}>
                                    <Image src={Logo} className='openspace-header-image' />
                                    <h1>COMING SOON</h1>
                                    <h6>Our website is under construction, subscribe to us for updates!</h6>
                                    <Form style={{marginTop: '3em'}}>
                                        <Form.Group controlId='formBasicEmail'>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Button type="submit" onClick={this.handleSubmission} style={{width: '10em', borderRadius: '3px', backgroundColor:'#EC6F14', borderColor:'#EC6F14'}}>
                                            Subscribe
                                        </Button>
                                        {this.state.submitted && <p className='mt-2 text-success'>Thank you for your interest!</p>}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}