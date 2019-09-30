import React from 'react'
import {Container, Row, Button, Card, Image} from 'react-bootstrap'
import { STRINGS } from '../../resources/strings'
import TonalityImg from '../../resources/imgs/tonality-thumbnnail.png'
import ExpIcon from '../../resources/imgs/web-startup.png'


export default class TechSection extends React.Component{

    render() {
        return (
            <Container fluid={true} className="mt-3">
                <Row>
                    <Card className="text-center mx-auto my-3">
                        <Card.Body>
                            <Card.Title>My Experience in Tech</Card.Title>
                            <Image src={ExpIcon} className='card-header-image mb-3'/>
                            <Card.Text>
                                {STRINGS.techExp}
                            </Card.Text>
                            <Card.Text>
                                {STRINGS.prevExp}
                            </Card.Text>
                            <Button variant="info"><a href='https://www.linkedin.com/in/danny-liu-b6y4u56u56/'>{STRINGS.expTechButton}</a></Button>
                        </Card.Body>

                    </Card>
                </Row>
                <Row>
                    <Card className="text-center mx-auto my-3">
                        <Card.Body>
                            <Card.Title>Tonality</Card.Title>
                            <Image src={TonalityImg} className='card-header-image' />
                            <Card.Text>
                                {STRINGS.tonalityDesc}
                            </Card.Text>
                            <Button variant="info"><a href='https://play.google.com/store/apps/details?id=ca.uwaterloo.tonality'>{STRINGS.downloadApp}</a></Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className="text-center mx-auto my-3">
                        <Card.Body>
                            <Card.Title>OpenSpace</Card.Title>
                            <Card.Text>
                                {STRINGS.openSpaceDesc}
                            </Card.Text>
                            <Button variant="info">Learn more now!</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }

}