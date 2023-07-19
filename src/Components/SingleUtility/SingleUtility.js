import React from "react";
import { Col } from "react-bootstrap";
import "./SingleUtility.css";

const SingleUtility = ({ item }) => {
  return (
    <Col lg={3}>
      <div className="single-utility">
        <div className="utility-image mb-4">
          <img src={item.image} alt="" className="w-100" />
        </div>
        <div className="utility-text">
          <h3 className="text-white pb-2">{item.heading}</h3>
          <p className="text-white">{item.text}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleUtility;
