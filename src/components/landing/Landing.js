import React from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import "./style.css";
import { BsEnvelope, BsGithub, BsFacebook } from "react-icons/bs";
import Particles from "react-tsparticles";
// import Scroll, { animateScroll as scrolll } from "react-scroll";

const Landing = () => {
  // const scrolToTop = () => {
  //   scrolll.scrollToTop();
  // };
  return (
    <Container className="topLanding" fluid>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,

          particles: {
            color: {
              value: "#ffffff",
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.6,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.6,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="linearGradient"></div>
      <Container className="landingPageContent">
        <Navbar expand="lg" variant="dark" className="py-0">
          <Container className="px-0 topNavbar ">
            <Navbar.Brand href="#home" className="py-3">
              bn.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about" className="py-3 pe-md-3">
                  About
                </Nav.Link>
                <Nav.Link href="#portfolio" className="py-3 pe-md-3">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#contact" className="py-3">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Row className="landingContent justify-content-center">
          <Col xs={12}>
            <Row className="justify-content-center">
              <Col
                xs={12}
                sm={2}
                md={1}
                className="text-sm-center order-sm-1 order-2 pt-sm-4"
              >
                <Nav.Link
                  href="mailto:bgs_norbi@yahoo.com"
                  className="iconHover"
                >
                  <BsEnvelope className="landingIcon" color="#fff" />
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/bgsnorbert"
                  className="iconHover"
                  target="_blank"
                >
                  <BsGithub className="landingIcon" color="#fff" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="iconHover"
                >
                  <BsFacebook className="landingIcon" color="#fff" />
                </Nav.Link>
              </Col>
              <Col
                xs={12}
                sm={10}
                className="landingText order-sm-2 order-1"
                md={7}
              >
                <div>Hi, My name is</div>
                <h1>B. Norbert</h1>
                <div className="landingThirdDiv">
                  i enjoy to build things that live on the internet
                </div>
              </Col>
              <Col xs={12} sm={8} md={6} className="mx-auto order-3">
                <Button href="#about" className="mt-3" variant="outline-light">
                  About me
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Landing;
