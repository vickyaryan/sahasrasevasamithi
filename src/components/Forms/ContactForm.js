import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function ContactForm(props) {
  useEffect(()=>{
    document.title="Contact Us";
  },[])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const { name, email, phoneNumber, message } = formData;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const messageData = `Name: ${name}%0D%0A 
Email Address: ${email}%0D%0A 
Mobile Number: ${phoneNumber}%0D%0A 
Message: ${message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:info@handstogetherngo.org?subject=${name}&body=${messageData}`;
    // console.log(formData);
    // console.log(messageData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };

  const canSubmit = [name, email, phoneNumber, message].every(Boolean);

  return (
    <Container>
      <Row>
      <Col sm lg={6}  className="d-flex justify-content-center pt-4 align-self-start">
          <div className="address border p-3 rounded-lg">
          <h4>Address</h4>
          <p>
            <h5>Sahasra Seva Samithi</h5>
            <FontAwesomeIcon icon={["fas", "map-marker"]} className="mr-2" />
            Dr as rao nagar,
            <br />
            Ecil,Hyderabad,500062,
            <br />
            Telangana,
              <br />
          </p>
          <a href="tel:+919133233473">
            <FontAwesomeIcon icon={["fas", "phone-alt"]} className="mr-2" />
            +91 91332 33473
          </a>
          <br />
          <a href="mailto: info@handstogetherngo.org">
            <FontAwesomeIcon icon={["fas", "envelope"]} className="mr-2" />
            info@handstogetherngo.org
          </a>
          </div>
        </Col>
        <Col sm lg={6} className="d-flex justify-content-center pt-4 order-lg-first order-md-first ">
          <Form style={{ width: "20rem" }} onSubmit={handleSubmit}>
            <h4 className="text-center mb-4">Contact Form</h4>
            <Form.Group controlId="Name">
              <Form.Label>Enter Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                required
                autoComplete
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                name="email"
                required
                autoComplete
                value={email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="MobileNumber">
              <Form.Label>Mobile Number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Mobile Number"
                inputMode="tel"
                name="phoneNumber"
                required
                autoComplete
                value={phoneNumber}
                onChange={handleChange}
                pattern="[1-9]{1}[0-9]{9}"
                maxLength="10"
                title="Please Enter a Valid 10 Digit Mobile Number"
              />
            </Form.Group>

            <Form.Group controlId="Message">
              <Form.Label>Enter Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Your Message"
                name="message"
                required
                onChange={handleChange}
                value={message}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={!canSubmit}
                block
              >
                Send Email
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
