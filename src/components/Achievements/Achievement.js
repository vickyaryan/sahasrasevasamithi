import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../imagesData";
import CountUpAnimation from "./CountUpAnimation";
function Achievement() {
  return (
    <Container fluid className="achivements py-5 font-weight-bold"  style={{'background':`url(${images.extra.bgImage}) no-repeat`}}>
      <Container>
      <Col sm={12} className="text-center">
        <h3>Our Achievements</h3>
      </Col>
      <Row>
        <Col md={3} sm className="text-center align-self-start py-4">
          <CountUpAnimation className="border-bottom pb-2" end={5} suffix="+" />
          <span>YEARS OF EXPERIENCE</span>
        </Col>
        <Col md={3} sm className="text-center align-self-start py-4">
          <CountUpAnimation className="border-bottom pb-2" end={1812} suffix="+" />
          <span>DONATIONS</span>
        </Col>
        <Col md={3} sm className="text-center align-self-start py-4">
          <CountUpAnimation className="border-bottom pb-2" end={4} suffix="+" />
          <span>MONTHLY EVENTS</span>
        </Col>
        <Col md={3} sm className="text-center align-self-start py-4">
          <CountUpAnimation className="border-bottom pb-2" end={48} suffix="+" />
          <span>FUNDS RAISED</span>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Achievement;
