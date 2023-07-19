import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Project.css";
const Project = (props) => {
  return (
    <section className="project-area">
      <div className="project-sketch">
        <div className="project-content">
          <Row className={`${props.rowReverse}`}>
            <Col lg={6}>
              <div className="project-video">
                <div className="ratio ratio-4x3 w-100">
                  <iframe
                    src={props.iframeSource}
                    title={props.iframeTitle}
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="project-text">
                <h1 className="project-heading text-white">
                  {props.projectHeading}
                </h1>
                <p className="project-para text-white">
                  {props.projectParagraph}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Project;
