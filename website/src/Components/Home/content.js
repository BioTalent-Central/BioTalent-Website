import React from 'react'
import { Container, Row, Col } from "shards-react"
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  NavLink
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
            <Col className="four columns">
              <Card className="projCard">
                <CardHeader>Gems of the Lower North Shore</CardHeader>
                <CardImg className="proj-image" src="images/project-four/cloud_berries.jpg" />
                <CardBody>
                  <p>Research of the potential resources on the lower north shore and their uses,
                   benefits, and impact on the environment.</p>
                 <NavLink active href='/project4'>
                   <Button>Project page &rarr;</Button>
                  </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>BioMakerspace and Biotechnology Resource Facility</CardHeader>
                <CardImg className="proj-image" src="images/project-six/BMS.png" />
                <CardBody>
                  <p>Creating a space for students to work with biotechnology
                  as well as manufacture and sell laboratory equipment and reagents.</p>
                <NavLink active href='/project6'>
                  <Button>Project page &rarr;</Button>
                </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>RNA based biocomputing</CardHeader>
                <CardImg className="proj-image" src="images/project-eight/biocomp4.png" />
                <CardBody>
                  <p>Engineering biological systems and cells to behave like computers
                   by having outputs based on programmed inputs</p>
                 <NavLink active href='/project8'>
                     <Button>Project page &rarr;</Button>
                   </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>BioEnvo</CardHeader>
                <CardImg className="proj-image" src="images/project-ten/biomol.png" />
                <CardBody>
                  <p>Research on ways to remove microplastics from the ottawa river.</p>
                    <NavLink active href='/project9'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>Policy Horizons Biodigital Convergence</CardHeader>
                <CardImg className="proj-image" src="/images/project-five/biodigital-front-page-2.jpg" />
                <CardBody>
                  <p>Creation of short reports, development of cascade diagrams, and
                  production of foresight study in biotechnology innovations</p>
                <NavLink active href='/project5'>
                    <Button>Project page &rarr;</Button>
                  </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>Experimental Learning Brewery and Distillery</CardHeader>
                <CardImg className="proj-image" src="images/project-three/Brewery.jpg" />
                <CardBody>
                  <p>Developing a microbrewery and distillery on campus as an experimental learning resource</p>
                    <NavLink active href='/project3'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>COVID Med</CardHeader>
                <CardImg className="proj-image" src="images/project-two/CBD.jpg" />
                <CardBody>
                  <p>Research into how CBD can help with the inflammatory symptoms of COVID-19 patients</p>
                    <NavLink active href='/project2'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>COVID ENG</CardHeader>
                <CardImg className="proj-image" src="images/project-one/CovidEng.jpg" />
                <CardBody>
                  <p>Designing point-of-care test kits using new technologies to speed up testing for COVID-19</p>
                    <NavLink active href='/project1'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader>3D Bioprinting</CardHeader>
                <CardImg className="proj-image" src="images/project-seven/jasmeet-with-syringe-pump.jpg" />
                <CardBody>
                  <p>Create a 3D bioprinter from an old bioprinter and create a business plan/pitch for the final design</p>
                    <NavLink active href='/project7'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
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
