import React from 'react'
import { Container, Row, Col } from "shards-react"
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react"


export default class Content extends React.Component{
  render(){
    return(
      <div>
        <div className="project-title" >
          <h1>Projects</h1>
        </div>
        <Container className ="projects">
          <Row className="row">
            <Col className="six columns">
              <Card className="projCard">
                <CardHeader>Gems of the Lower North Shore</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Research of the potential resources on the lower north shore and their uses,
                   benefits, and impact on the environment.</p>
                 <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>BioMakerspace and Biotechnology Resource Facility</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Creating a space for students to work with biotechnology
                  as well as manufacture and sell laboratory equipment and reagents.</p>
                <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>RNA based biocomputing</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Engineering biological systems and cells to behave like computers
                   by having outputs based on programmed inputs</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>BioEnvo</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Research on ways to remove microplastics from the ottawa river.</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>Policy Horizons Biodigital Convergence</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Creation of short reports, development of cascade diagrams, and
                  production of foresight study in biotechnology innovations</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>Experimental Learning Brewery and Distillery</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Developing a microbrewery and distillery on campus as an experimental learning resource</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>COVID Med</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Research into how CBD can help with the inflammatory symptoms of COVID-19 patients</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>COVID ENG</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Designing point-of-care test kits using new technologies to speed up testing for COVID-19</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>3D Bioprinting</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Create a 3D bioprinter from an old bioprinter and create a business plan/pitch for the final design</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "six columns">
              <Card className="projCard">
                <CardHeader>Design of a Novel Approach for Detection and Characterization of Microplastics</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Design detailed approach for sampling and pretreatment of water, food, and biotas and for detection
                  and characterization of microplastics and nanoplastics in pretreated samples</p>
                <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
