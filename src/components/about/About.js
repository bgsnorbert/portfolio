import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic from "../../images/pic.jpg";
import "./style.css";
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

const About = () => {
  return (
    <Container id="about" fluid className="pt-5 aboutSectionBg">
      <Container className="aboutSection mt-4">
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={6} md={3} className="mb-sm-0 mb-4">
            <Image fluid src={pic} alt="image from me" />
          </Col>

          <Col xs={12} sm={6} md={9} className=" aboutMe">
            <div className="d-flex justify-content-between">
              <h3>About me</h3>
              <div className="position-relative">
                <div className="cube1"></div>
                <div className="cube2"></div>
              </div>
            </div>
            <div className="line"></div>
            <div className="greyText">
              Hello, My name is B. Norbert i'm a passionate Front-End developer.
            </div>
            <p className="greyText">
              My main goal is to expand my knowledge and experience in
              developing web applications and websites.
            </p>

            <hr />

            <h3>Skills</h3>
            <div className="subTItle">Front-End</div>
            <div className="skillsContainer">
              <div className=" me-2 d-inline-block">
                {" "}
                <FaHtml5 className="skillsIcons htmlIcon" />
                HTML
              </div>
              <div className=" me-2 d-inline-block">
                <FaCss3Alt className="skillsIcons cssIcon" />
                CSS
              </div>
              <div className=" me-2 d-inline-block">
                <FaJsSquare className="skillsIcons jsIcon" />
                JavaScript
              </div>
              <div className=" me-2 d-inline-block">
                <FaSass className="skillsIcons sassIcon" />
                SASS
              </div>
              <div className=" me-2 d-inline-block">
                <FaBootstrap className="skillsIcons bootstrapIcon" />
                Bootstrap
              </div>
              <div className=" me-2 d-inline-block text-center">
                <FaGitAlt className="skillsIcons gitIcon" />
                Git
              </div>
              <div className=" me-2 d-inline-block">
                <FaGithub className="skillsIcons githubIcon" />
                Github
              </div>
              <div className=" d-inline-block">
                <FaReact className="skillsIcons reactIcon" />
                React
              </div>
            </div>

            {/* <Button>Portfolio</Button> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
