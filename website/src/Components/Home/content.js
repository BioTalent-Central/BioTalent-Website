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
        <Container className ="projects">
          <div className="heading impact" >
            <h1>Projects</h1>
          </div>
          <Row>
            <Col className="projectL">
              <Card>
                <CardHeader>Gems of the Lower North Shore</CardHeader>
                <CardImg className="proj-image" src="images/project-four/cloud_berries.jpg" />
                <CardBody>
                  <p>Research of the potential resources on the lower north shore and their uses,
                   benefits, and impact on the environment.</p>
                 <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col className = "projectR">
              <Card>
                <CardHeader>BioMakerspace and Biotechnology Resource Facility</CardHeader>
                <CardImg className="proj-image" src="images/project-six/BMS.png" />
                <CardBody>
                  <p>Creating a space for students to work with biotechnology
                  as well as manufacture and sell laboratory equipment and reagents.</p>
                <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className = "projectL">
              <Card>
                <CardHeader>RNA based biocomputing</CardHeader>
                <CardImg className="proj-image" src="images/project-eight/biocomp4.png" />
                <CardBody>
                  <p>Engineering biological systems and cells to behave like computers
                   by having outputs based on programmed inputs</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col className = "projectR">
              <Card>
                <CardHeader>BioEnvo</CardHeader>
                <CardImg className="proj-image" src="images/project-ten/biomol.png" />
                <CardBody>
                  <p>Research on ways to remove microplastics from the ottawa river.</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className = "projectL">
              <Card>
                <CardHeader>Policy Horizons Biodigital Convergence</CardHeader>
                <CardImg className="proj-image" src="/images/project-five/biodigital-front-page-2.jpg" />
                <CardBody>
                  <p>Creation of short reports, development of cascade diagrams, and
                  production of foresight study in biotechnology innovations</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col className = "projectR">
              <Card>
                <CardHeader>Experimental Learning Brewery and Distillery</CardHeader>
                <CardImg className="proj-image" src="images/project-three/Brewery.jpg" />
                <CardBody>
                  <p>Developing a microbrewery and distillery on campus as an experimental learning resource</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className = "projectL">
              <Card>
                <CardHeader>COVID Med</CardHeader>
                <CardImg className="proj-image" src="images/project-two/CBD.jpg" />
                <CardBody>
                  <p>Research into how CBD can help with the inflammatory symptoms of COVID-19 patients</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col className = "projectR">
              <Card>
                <CardHeader>COVID ENG</CardHeader>
                <CardImg className="proj-image" src="images/project-one/CovidEng.jpg" />
                <CardBody>
                  <p>Designing point-of-care test kits using new technologies to speed up testing for COVID-19</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className = "projectL">
              <Card>
                <CardHeader>3D Bioprinting</CardHeader>
                <CardImg className="proj-image" src="images/project-seven/jasmeet-with-syringe-pump.jpg" />
                <CardBody>
                  <p>Create a 3D bioprinter from an old bioprinter and create a business plan/pitch for the final design</p>
                  <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col className = "projectR">
              <Card>
                <CardHeader>Design of a Novel Approach for Detection and Characterization of Microplastics</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <p>Design detailed approach for sampling and pretreatment of water, food, and biotas and for detection
                  and characterization of microplastics and nanoplastics in pretreated samples</p>
                <Button>Project page &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
    )
  }
}
