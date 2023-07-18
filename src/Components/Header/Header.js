import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../Images/headerlogo.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-area">
      <div className="nav-content project-sketch">
        <Row>
          <Col lg={6}>
            <div className="nav-logo  bg-transparent">
              <img className="" src={logo} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-white header-media-icon">
              <div className="header-icon">
                <i className="fa-solid fa-house pe-3"></i>
                <i className="fa-brands fa-twitter pe-3"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Header;
