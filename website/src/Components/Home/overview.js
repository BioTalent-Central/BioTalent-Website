import React from 'react'
import {Container, Row, Col} from 'shards-react'

function Overview(){
  return(
    <div className="overview">
      <Container>
        <Row>
          <Col>
            <h1>uOttawa BioTalent</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>The uOttawa Biotalent program allows students to explore different areas of biotechnology while getting hands on work experience.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Overview
