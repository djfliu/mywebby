import React from 'react'
import {STRINGS} from "../../resources/strings";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/es/Button";
import FormLabel from "react-bootstrap/es/FormLabel";
import ModalHeader from "react-bootstrap/ModalHeader";
import TonalityImg from "../../resources/imgs/tonality-thumbnnail.png";
import Logo from "../../resources/imgs/logo.png"
import {Image} from "react-bootstrap";

export default class OpenSpaceScreen extends React.Component{
    render(){
        return (
            <div className="main main-raised profile-page vertical-center" style={{width: '50%', margin: 'auto', marginTop: '30%'}}>
                <div className="profile-content align-content-center">
                    <div className="container bg-main">
                        <div className="row">
                            <div className="col-md-10 ml-auto mr-auto">
                                <div className="profile" style={{margin: '2em'}}>
                                    <Image src={Logo} className='openspace-header-image' />
                                    <h1>COMING SOON</h1>
                                    <h6>Our website is under construction, subscribe to us for updates!</h6>
                                    <Form style={{marginTop: '3em'}}>
                                        <Form.Group controlId='formBasicEmail'>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Button type="submit" style={{width: '15em', borderRadius: '3px', backgroundColor:'#EC6F14', borderColor:'#EC6F14'}}>
                                            Subscribe
                                        </Button>
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