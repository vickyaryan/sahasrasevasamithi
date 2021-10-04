import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Container, Image } from "react-bootstrap";
import images from "../../imagesData";
function Donate() {
  useEffect(()=>{
    document.title="Donate";
  },[])
  const [activeKey, setActiveKey] = useState(null);
  const payOnline=()=>{
window.open(`https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=2054757`,'_blank');
  }
  const upiPayment=()=>{
window.open(`upi://pay?pa=9133644757@okbizaxis&pn=Sahasra%20Seva%20Samithi&mc=4900&aid=uGICAgIDDwPP-EA&tr=BCR2DN6T7PVNDUBL`);
  }
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <h3 className="text-center mt-2  mb-3">Donation Methods</h3>
      <div className="qr-code d-flex flex-column mb-4">
        <Image className="shadow-lg" src={images.extra.qrCode} width="200" height="200" alt="qr code" />
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <div className="payment-wallet-icons">
          <Image src={images.icons.image1}  width="20" height="20" alt="Paytm"/>
          <Image src={images.icons.image2} className="mx-3"  width="20" height="20" alt="Phone Pe"/>
          <Image src={images.icons.image3}   width="20" height="20" alt="Google Pay"/>
          </div>
        <a
          rel="noopener noreferrer"
          download="qr-code.jpeg"
          href={images.extra.qrDownload}
          title="Download QR Code"
        >
          <FontAwesomeIcon icon={["fas", "download"]} />
        </a>
        </div>
      </div>


      <Accordion style={{width:"20rem"}} className="shadow-lg mt-4">
  <Card >
    <Accordion.Toggle className="user-select-none cursor-pointer" as={Card.Header} eventKey="0" onClick={()=>{
  if (activeKey === 0) {
    setActiveKey(null);
  } else {
    setActiveKey(0);
  }
    }}>
       Pay Online 
    {activeKey===0?<FontAwesomeIcon icon={['fas','chevron-up']} className="float-right"/>:<FontAwesomeIcon icon={['fas','chevron-down']} className="float-right"/>}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
    <Card.Body className="d-flex justify-content-center"><Button variant="primary" size="lg" onClick={payOnline}>Click Here To Pay Online</Button></Card.Body>
     
    </Accordion.Collapse>
  </Card>
  <Card >
  <Accordion.Toggle className="user-select-none cursor-pointer" as={Card.Header} eventKey="1" onClick={()=>{
  if (activeKey === 1) {
    setActiveKey(null);
  } else {
    setActiveKey(1);
  }
    }}>
      UPI Details {activeKey===1?<FontAwesomeIcon icon={['fas','chevron-up']} className="float-right"/>:<FontAwesomeIcon icon={['fas','chevron-down']} className="float-right"/>}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
    <Card.Body className="d-flex justify-content-center align-items-center flex-column">
      <Button variant="primary" size="lg" onClick={upiPayment} className="w-75">UPI Payment</Button>
      <div className="upi-details mt-4 font-size-3 ">
      <p>Sahasra Seva Samiti
        <br/>
Google Pay, Phone Pay:<br/>
<span className="font-weight-bold">91336 44757</span></p>
</div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
  <Accordion.Toggle className="user-select-none cursor-pointer" as={Card.Header} eventKey="2" onClick={()=>{
  if (activeKey === 2) {
    setActiveKey(null);
  } else {
    setActiveKey(2);
  }
    }}>
      Bank Details{activeKey===2?<FontAwesomeIcon icon={['fas','chevron-up']} className="float-right"/>:<FontAwesomeIcon icon={['fas','chevron-down']} className="float-right"/>}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
    <Card.Body>

      <p>
        State Bank of India<br/>
      Sahasra Seva Samithi<br/>
        Account Number: 39196971060<br/>
        Branch IFSC: SBIN0015853
        </p>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

    </Container>
  );
}

export default Donate;
