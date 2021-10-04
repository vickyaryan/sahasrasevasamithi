import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import data from "../../data";
function OurServices() {
  return (
    <Container fluid className="our-services mt-2">
    <Container>
      <h3 className="text-center pt-2">Our Services</h3>
      <Row>
        <Col sm={12} md={4} >
          <div className="services-wrapper pt-3">
            <ul className="d-flex flex-column align-items-between">
              {data.services.left.map((item) => (
                <li key={item._id}>
                  <div className="service-icon position-absolute">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h6 className="pl-5">{item.title}</h6>
                  {/* <p className="pl-5">{item.desc}</p> */}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex justify-content-center align-items-center">
          <Image src={data.services.image} alt="services" width="100%" height="300" />
        </Col>
        <Col sm={12} md={4}>
          <div className="services-wrapper pt-3">
            <ul className="d-flex flex-column align-items-between">
              {data.services.right.map((item) => (
                <li key={item._id}>
                  <div className="service-icon position-absolute">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h6 className="pl-5">{item.title}</h6>
                  {/* <p className="pl-5">{item.desc}</p> */}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </Container>
  );
}

export default OurServices;
