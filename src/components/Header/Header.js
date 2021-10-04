import { Navbar, Nav, Image, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";
import { NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const hideTopBar = () => {
    setShowTopBar(false);
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const closeNavBar = () => {
    setTimeout(() => {
      setIsExpanded(false);
    }, 150);
  };
  return (
    <>
      {showTopBar ? (
        <div
          id="topbar"
          className="d-flex align-items-center flex-row sticky-top"
        >
          <Container
            fluid
            className="d-flex justify-content-between align-items-center"
          >
            <div className="contact-info d-none d-md-block d-lg-block">
              <a href="tel:+919133233473" className="mx-2">
                <FontAwesomeIcon icon={["fas", "phone-alt"]} className="mx-2" />
                +91 91332 33473
              </a>
              <a href="mailto: info@handstogetherngo.org" className="mx-2">
                {" "}
                <FontAwesomeIcon icon={["fas", "envelope"]} className="mx-2" />
                info@handstogetherngo.org
              </a>
            </div>
            <div className="social-links">
              <a rel="noreferrer noopener" href="https://www.facebook.com/mahi.palvay" target="_blank" className="mx-md-2">
                <FontAwesomeIcon icon={["fab", "facebook"]}/>
                <span className="sr-only">facebook</span>
              </a>
              <a rel="noreferrer noopener" target="_blank" href="#" className="mx-md-2">
                <FontAwesomeIcon icon={["fab", "instagram"]}/>
                <span className="sr-only">instagram</span>
              </a>
            </div>
            <Link to="/donate"><Button variant="primary" className="my-2">
              Donate Now
            </Button></Link>
          </Container>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={hideTopBar}
            icon={["fas", "times"]}
            className="mr-3 close-topBar"
          />
        </div>
      ) : null}
        <Navbar
          bg="light"
          expand="lg"
          expanded={isExpanded}
        >
          <Navbar.Brand>
            <Link exact to="/">
              <Image src={logo} rounded height="75" width="100%" alt="SSS Logo"/>
              <span className="sr-only">logo image</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="d-flex justify-content-center align-items-center text-center">
              <NavLink exact onClick={closeNavBar} className="nav-link" to="/">
                HOME
              </NavLink>
              <NavLink onClick={closeNavBar} className="nav-link" to="/aboutus">
                ABOUT US
              </NavLink>
              <NavLink onClick={closeNavBar} className="nav-link" to="/gallery">
               GALLERY
              </NavLink>
              <NavLink onClick={closeNavBar} className="nav-link" to="/donate">
              DONATE
              </NavLink>
              <NavLink
                onClick={closeNavBar}
                className="nav-link"
                to="/contactus"
              >
                CONTACT US
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default Header;
