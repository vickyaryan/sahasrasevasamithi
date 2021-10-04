import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../data";

function Contribute() {
  const cardStyle = {
    height: "8rem",
    width: "8rem",
    borderRadius: "1rem"
  };
  return (
    <Container fluid className=" mt-2">
      <h3 className="text-center pt-2">How Can You Contribute</h3>
      <Container className="join-us pb-3">
        <Row>
          {data.contribute.map((item)=>
          <Col key={item._id} xs={6} sm={3} md={3} lg={3} className="d-flex justify-content-center">
             <Link to={item.link} className="text-decoration-none"> <div className="bg-white shadow m-2 d-flex flex-column align-items-center justify-content-center" style={cardStyle}>
              <FontAwesomeIcon
                icon={item.icon}
                color={item.color}
                size="2x"
              />
              <span className="pt-2 text-dark text-center" >{item.title}</span>
              </div>
              </Link>
          </Col>
            )}
        </Row>
      </Container>
    </Container>
  );
}
export default Contribute;
