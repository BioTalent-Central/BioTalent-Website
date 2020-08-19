import React from 'react'
import "shards-ui/dist/css/shards.min.css"
import { Container, Row, Col } from 'shards-react'
import {
    Card,
    CardBody,
    CardFooter
} from "shards-react"

export default class quotesOpp extends React.Component{
    render() {
        return (
            <section className="oppContainer">
                <Row>
                    <Col className="leftContent">
                        <Card className="oppCard">
                            <CardBody className="cardBody">
                                <p className="quote">
                                    In partnership with BioTalent Canada, our vision is to provide students with a one of a kind co-op experience through the exploration of solutions to real-world problems in the biotechnology sector.
                                </p>
                            </CardBody>
                            <CardFooter className="cardFooter" >Name of person</CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightContent">
                        <Card className="oppCard">
                            <CardBody className="cardBody">
                                <p className="quote">
                                    The Coronavirus pandemic was unprecedented and shocking to the whole world, forcing people to remain home in order to ensure their safety. As a result, many lost their jobs or/and found it difficult to find employment, specifically non essential workers, and college and university students. Fortunately, Mads Kaern got in touch with the BioTalent program in order to procure coop students with placements for the summer. Thus, the uOttawa BioTalent project was created.  
                                </p>
                            </CardBody>
                            <CardFooter className="cardFooter">Name of person</CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="leftContent">
                        <Card className="oppCard">
                            <CardBody className="cardBody"> 
                                <p className="quote">
                                        The Coronavirus pandemic was unprecedented and shocking to the whole world, forcing people to remain home in order to ensure their safety. As a result, many lost their jobs or/and found it difficult to find employment, specifically non essential workers, and college and university students. Fortunately, Mads Kaern got in touch with the BioTalent program in order to procure coop students with placements for the summer. Thus, the uOttawa BioTalent project was created.  
                                </p>
                            </CardBody>
                            <CardFooter className="cardFooter">Name of person</CardFooter>
                        </Card>
                    </Col>
                </Row>
            </section>
        )
    }
}