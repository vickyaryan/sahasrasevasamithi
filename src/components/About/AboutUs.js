import React,{useEffect} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import data from "../../data";
import logo from "../../images/logo.png";
import images from "../../imagesData";
function AboutUs() {
  useEffect(()=>{
    document.title="Sahasra Seva Samithi";
  },[])
  return (
    <Container fluid className="mt-2" >
    <Container>
      <div className="text-center">
        <p className="pt-3">{data.about.subTitle}</p>
        <h3>{data.about.heading}</h3>
      </div>
      <Row>
      <Col sm={12} md={4} className="d-flex justify-content-center align-items-center">
          <Image src={logo} alt="about" rounded width="100%" height="200"/>
        </Col>
        <Col sm={12} md={8} className="pt-2  order-lg-first order-md-first">
          {data.about.content.map(item=>{
            return <p key={item._id}>{item.description}</p>
          }
            )}
        </Col>
     
      </Row>
    </Container>
    </Container>
  );
}

export default AboutUs;
