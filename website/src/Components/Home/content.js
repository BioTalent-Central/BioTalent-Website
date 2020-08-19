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
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">3D Bioprinting</CardHeader>
                <CardImg className="proj-image" src="images/project-seven/jasmeet-with-syringe-pump.jpg" />
                <CardBody>
                  <p>Design of 3D Bioprinters for BioArt and Tissue Engineering Applications</p>
                    <NavLink active href='/project7'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">BioMakerSpace</CardHeader>
                <CardImg className="proj-image" src="images/project-six/BMS.png" />
                <CardBody>
                  <p>Design and Implementation of Virtual and IRL uOttawa BioMakerSpaces</p>
                <NavLink active href='/project6'>
                  <Button>Project page &rarr;</Button>
                </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">Microbrewery & Distillery</CardHeader>
                <CardImg className="proj-image" src="images/project-three/Brewery.jpg" />
                <CardBody>
                  <p>Cost-efficient Technologies for Microbrewery and Craft Distilleries</p>
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
                <CardHeader className="projHeader">COVID MED</CardHeader>
                <CardImg className="proj-image" src="images/project-two/CBD.jpg" />
                <CardBody>
                  <p>Assessment of CBD for the Treatment of Inflammatory Responses in COVID-19 Patients</p>
                    <NavLink active href='/project2'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">BioDigital Policy Horizons</CardHeader>
                <CardImg className="proj-image" src="/images/project-five/biodigital-front-page-2.jpg" />
                <CardBody>
                  <p>Foresight Analysis and Policy Implications of Biological and Digital Technology Convergence</p>
                <NavLink active href='/project5'>
                    <Button>Project page &rarr;</Button>
                  </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">BioComputing</CardHeader>
                <CardImg className="proj-image" src="images/project-eight/biocomp4.png" />
                <CardBody>
                  <p>Technologies for RNA-based Biocomputing for "Smart" Biological Devices</p>
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
                <CardHeader className="projHeader">BioEnvo</CardHeader>
                <CardImg className="proj-image" src="images/project-ten/biomol.png" />
                <CardBody>
                  <p>Biology-based Remediation of Microplastic Pollution to Restore and Revive Freshwater Habitats in the Ottawa River</p>
                    <NavLink active href='/project9'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className = "four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">COVID ENG</CardHeader>
                <CardImg className="proj-image" src="images/project-one/CovidEng.jpg" />
                <CardBody>
                  <p>Emerging Biotechnologies for COVID-19 Point-of-care Testing</p>
                    <NavLink active href='/project1'>
                      <Button>Project page &rarr;</Button>
                    </NavLink>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
            <Col className="four columns">
              <Card className="projCard">
                <CardHeader className="projHeader">Gems of the Lower North Shore</CardHeader>
                <CardImg className="proj-image" src="images/project-four/cloud_berries.jpg" />
                <CardBody>
                  <p>Innovative Natural Resource Development of Quebec's Lower North Shore Region</p>
                 <NavLink active href='/project4'>
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
