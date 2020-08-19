import React from 'react'
import "shards-ui/dist/css/shards.min.css"
import { Container, Row, Col } from 'shards-react'
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react"

export default class contentAboutUs extends React.Component{
    render() {
        return (
            <Container className="aboutusContainer">
                <Row>
                    <Col className="leftContent">
                        <Card>
                            <CardHeader className="TitleAboutUs">Our Vision</CardHeader>
                                <CardBody>
                                    <p className="aboutus-vision">
                                        In partnership with BioTalent Canada, our vision is to provide students with a one of a kind co-op experience through the exploration of solutions to real-world problems in the biotechnology sector.
                                    </p>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col className="rightContent">
                        <Card>
                            <CardHeader className="TitleAboutUs">Our Mission</CardHeader>
                                <CardBody>
                                    <p className="aboutus-mission">
                                        Our mission is to give uOttawa students the opportunity to work collaboratively with other students from various backgrounds on a self-guided, hands-on project to acquire job-readiness training, while further developing their current skills.
                                    </p>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="leftContent">
                        <Card>
                            <CardHeader className="TitleAboutUs">Our Values</CardHeader>
                                <CardBody>
                                    <p className='aboutus-values'>
                                        We value the student's perspectives and trust them to come up with innovative solutions to a real-world problem in a self-guided research project.
                                    </p>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col className="rightContent">
                        <Card>
                            <CardHeader className="TitleAboutUs">Our History</CardHeader>
                                <CardBody>
                                    <p className="aboutus-history">
                                        The Coronavirus pandemic was unprecedented and shocking to the whole world, forcing people to remain home in order to ensure their safety. As a result, many lost their jobs or/and found it difficult to find employment, specifically non essential workers, and college and university students. Fortunately, Mads Kaern got in touch with the BioTalent program in order to procure coop students with placements for the summer. Thus, the uOttawa BioTalent project was created.  
                                    </p>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>  
            </Container>
        )
    }
}