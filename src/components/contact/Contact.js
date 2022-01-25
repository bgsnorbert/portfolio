import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Nav,
} from "react-bootstrap";
import { BsEnvelope, BsGithub, BsFacebook } from "react-icons/bs";

import "./style.css";

const Contact = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container id="contact" className="contactBg py-5" fluid>
      <Container>
        <Row>
          <Col sm={4} md={5} className="text-center contactText my-auto">
            <h3>Contact Me</h3>
            <p>Have any question? Feel free to contact me.</p>
            <div className="d-flex justify-content-center">
              <Nav.Link href="mailto:bgs_norbi@yahoo.com" className="iconHover">
                <BsEnvelope className="landingIcon" color="#fff" />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/bgsnorbert"
                target="_blank"
                className="iconHover"
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
            </div>
          </Col>
          <Col sm={8} md={7} className="px-md-5 mt-sm-0 mt-5">
            <Form method="post" onSubmit={formSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Email" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput2"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Your message"
                  style={{ minHeight: "120px", maxHeight: "240px" }}
                />
              </FloatingLabel>
              <Button className="mt-3" variant="outline-light" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
