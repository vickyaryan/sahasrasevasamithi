import React,{useEffect} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import data from "../../data";
import logo from "../../images/logo.png";
import Team from "../Team/OurTeam";

function AboutPage(){
  useEffect(()=>{
    document.title="About Us";
  },[])
    return(
    <Container>
        <h3 className="text-center my-2">About Us</h3>
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
       
        {/* <Row>
           
            <Col sm md={6}>
    <div class="embed-responsive embed-responsive-16by9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3HwWVpUJA60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
             </Col>
             <Col sm md={6} className="order-lg-first order-sm-first">
            {data.about.content.map(item=>{
            return <p key={item._id}>{item.description}</p>
          }
            )}
            </Col>
        </Row> */}
      {/* <Team/> */}
    </Container>

    );
}

export default AboutPage;