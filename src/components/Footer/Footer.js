import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container className="">
        <Row>
          <Col sm md={6} lg={4} className="pt-3">
            <h4>Hands Together</h4>
            <p>
              <FontAwesomeIcon icon={["fas", "map-marker"]} className="mr-2" />
              Dr as rao nagar,
              <br />
              Ecil,Hyderabad,500062,
              <br/>
              Telangana,
              <br />
            </p>
            <a href="tel:+919133233473" className="mr-2">
              <FontAwesomeIcon icon={["fas", "phone-alt"]} className="mr-2" />
              +91 91332 33473
            </a>
            <br />
            <a href="mailto: info@handstogetherngo.org" className="mr-2">
              <FontAwesomeIcon icon={["fas", "envelope"]} className="mr-2" />
              info@handstogetherngo.org
            </a>
          </Col>
          <Col
            sm
            md={6}
            lg={4}
            className="d-flex flex-column pt-3"
          >
            <h4>Useful Links</h4>
            <Link exact to="/">
              HOME
            </Link>
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/donate">DONATE</Link>
            <Link to="/contactus">CONTACT US</Link>
          </Col>
          <Col sm md={12} lg={4} className="pt-3">
            <h4>Our Website Sponsor</h4>
            <span>Saidoondi Chaudhari</span>
            <br/>
            <a href="mailto:saidoondi7@gmail.com" className="mr-2">
              <FontAwesomeIcon icon={["fas", "envelope"]} className="mr-2" />
              saidoondi7@gmail.com
            </a>
          </Col>
        </Row>
        <hr className="bg-dark" />
        <Col sm={12} className="text-center pb-3">
          <a href="#">Hands Together</a>{" "}
          &copy; {currentYear} | <span>All Rights Reserved.</span>
        </Col>
      </Container>
    </footer>
  );
}

export default Footer;
