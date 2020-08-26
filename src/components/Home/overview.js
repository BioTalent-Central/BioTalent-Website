import React from 'react'
import {Container, Row, Col} from 'shards-react'
import './home.css'

function Overview(){
  return(
    <div className="overview">
      <Container>
        <Row>
          <Col>
            <h1>uOttawa BioGenie</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Where students can explore different areas of biotechnology while getting hands on work experience.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Overview
