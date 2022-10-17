import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const ProjectCard = ({
  picture,
  title,
  description,
  technologies,
  techIconsFront,
  link,
  pictureAlt,
  techIconsBack,
}) => {
  return (
    <Col md={6} className="pe-md-2">
      <Row className="projectDescription py-4 px-xl-5 px-3 me-md-1">
        <Col lg={4}>
          <Image className="w-100" fluid src={picture} alt={pictureAlt} />
        </Col>
        <Col lg={8} className="portfolioLayout">
          <h4 className="mt-2 mt-lg-0 projectTitle">{title}</h4>
          <div className="detailsWrap">
            <div>
              <p>{description}</p>
            </div>
            <div>
              <div>{technologies}</div>
              <div className="divider"></div>
              <div className="d-flex projectIcons mt-1">{techIconsFront}</div>
              {techIconsBack && (
                <div className="d-flex projectIcons mt-2">{techIconsBack}</div>
              )}

              <Button
                className="mt-3 px-4 portfolioBtn"
                variant="outline-primary"
                href={link}
                target="_blank"
              >
                View
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProjectCard;
