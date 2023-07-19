import React from "react";
import { Col, Row } from "react-bootstrap";
import footerImage from "../../Images/headerlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-area">
      <div className="project-sketch">
        <div className="footer-content text-center">
          <Row className="align-items-center">
            <Col lg={4}>
              <h3 className="text-white d-md-none d-lg-block">FAQ</h3>
            </Col>
            <Col lg={4}>
              <img src={footerImage} alt="" className="footer-image" />
            </Col>
            <Col lg={4}>
              <div className="text-white">
                <div className="footer-icon d-md-none d-lg-block">
                  <i className="fa-solid fa-house pe-3"></i>
                  <i className="fa-brands fa-twitter pe-3"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Footer;
