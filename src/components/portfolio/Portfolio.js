import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./style.css";
import Pic1 from "../../images/pic1.jpg";
import Pic2 from "../../images/pic2.jpg";
import Pic3 from "../../images/pic3.jpg";
import Pic4 from "../../images/pic4.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <Container id="portfolio" fluid className="portfolioBg">
      <Container>
        <Row>
          <h3 className="my-5 pt-3">Projects</h3>

          <Col md={6} className="pe-md-2">
            <Row className="projectDescription py-4 px-xl-5 px-3 me-md-1">
              <Col lg={4}>
                <Image
                  className="w-100"
                  fluid
                  src={Pic4}
                  alt="project picture"
                />
              </Col>
              <Col lg={8} className="portfolioLayout">
                <h4 className="projectTitle">E-Travel App</h4>
                <p>
                  <span
                    className="mb-2"
                    style={{
                      display: "block",
                      marginTop: "-.4rem",
                      color: "#838383",
                      fontWeight: "500",
                    }}
                  >
                    This is my most recent project.
                  </span>
                  E-travel is a travel applications with exotic destinations.
                  Built with React functional components and more.
                </p>
                <div>React Hooks: useState(), useEffect(), useContext()</div>
                <div className="divider"></div>
                <div className="d-flex projectIcons mt-1">
                  <FaHtml5 className="skillsIcons htmlIcon" />
                  <FaCss3Alt className="skillsIcons cssIcon" />
                  <FaJsSquare className="skillsIcons jsIcon" />
                  <FaBootstrap className="skillsIcons bootstrapIcon" />
                  <FaGithub className="skillsIcons githubIcon" />
                  <FaReact className="skillsIcons reactIcon" />
                </div>
                <Button
                  className="mt-3 px-4 portfolioBtn"
                  variant="outline-primary"
                  href="https://bgsnorbert.github.io/travel-app/"
                  target="_blank"
                >
                  View
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="ps-md-2 mt-md-0 mt-4">
            <Row className="projectDescription py-4 px-xl-5 px-3 ms-md-1 h-100">
              <Col lg={4}>
                <Image
                  className="w-100"
                  fluid
                  src={Pic3}
                  alt="project picture"
                />
              </Col>
              <Col lg={8}>
                <h3>Makeup App</h3>

                <p className="mb-lg-4">
                  Makeup Beauty, this App is built upon practicing working with
                  public APIs, Fetching data with Axios async, routing and more.
                </p>
                <div>React Hooks: useState(), useEffect()</div>
                <div className="divider"></div>
                <div className="d-flex projectIcons mt-1">
                  <FaHtml5 className="skillsIcons htmlIcon" />
                  <FaCss3Alt className="skillsIcons cssIcon" />
                  <FaJsSquare className="skillsIcons jsIcon" />
                  <FaBootstrap className="skillsIcons bootstrapIcon" />
                  <FaGithub className="skillsIcons githubIcon" />
                  <FaReact className="skillsIcons reactIcon" />
                </div>
                <Button
                  className="mt-3 px-4 portfolioBtn"
                  variant="outline-primary"
                  href="https://bgsnorbert.github.io/react-makeup-app/"
                  target="_blank"
                >
                  View
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} className="pe-md-2">
            <Row className="projectDescription py-4 px-xl-5 px-3 me-md-1">
              <Col lg={4}>
                <Image
                  className="w-100"
                  fluid
                  src={Pic2}
                  alt="project picture"
                />
              </Col>
              <Col lg={8}>
                <h3>Quiz App</h3>
                <p>
                  Quiz App, this App is built upon practicing working with
                  public APIs, Fetching data async, and more.
                </p>
                <div>React Hooks: useState(), useEffect()</div>

                <div className="divider"></div>
                <div className="d-flex projectIcons mt-1">
                  <FaHtml5 className="skillsIcons htmlIcon" />
                  <FaCss3Alt className="skillsIcons cssIcon" />
                  <FaJsSquare className="skillsIcons jsIcon" />
                  <FaBootstrap className="skillsIcons bootstrapIcon" />
                  <FaGithub className="skillsIcons githubIcon" />
                  <FaReact className="skillsIcons reactIcon" />
                </div>
                <Button
                  className="mt-3 px-4 portfolioBtn"
                  variant="outline-primary"
                  href="https://bgsnorbert.github.io/react-quiz-app/"
                  target="_blank"
                >
                  View
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="ps-md-2 mt-md-0 mt-4">
            <Row className="projectDescription py-4 px-xl-5 px-3 ms-md-1 h-100">
              <Col lg={4}>
                <Image
                  className="w-100"
                  fluid
                  src={Pic1}
                  alt="project picture"
                />
              </Col>
              <Col lg={8}>
                <h3>Ristoranti</h3>
                <p className="pb-lg-5 mb-lg-4">
                  This Project is not recent at all, not fancy at all, just a
                  simple presentation website.
                </p>
                <div className="divider"></div>
                <div className="d-flex projectIcons mt-1">
                  <FaHtml5 className="skillsIcons htmlIcon" />
                  <FaCss3Alt className="skillsIcons cssIcon" />
                  <FaJsSquare className="skillsIcons jsIcon" />
                  <FaSass className="skillsIcons sassIcon" />
                  <FaBootstrap className="skillsIcons bootstrapIcon" />
                  <FaGithub className="skillsIcons githubIcon" />
                </div>
                <Button
                  className="mt-3 px-4 portfolioBtn"
                  variant="outline-primary"
                  href="https://bgsnorbert.github.io/"
                  target="_blank"
                >
                  View
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Portfolio;
