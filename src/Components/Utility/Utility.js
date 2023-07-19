import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import SingleUtility from "../SingleUtility/SingleUtility";
import "./Utility.css";

const Utility = () => {
  const [utility, setUtility] = useState([]);
  useEffect(() => {
    fetch("Utility.json")
      .then((res) => res.json())
      .then((data) => setUtility(data));
  }, []);
  return (
    <section className="utility-area">
      <div className="project-sketch">
        <h1 className="text-center text-white pb-3">HOLDERS UTILITY</h1>
        <Row>
          {utility.map((item) => (
            <SingleUtility key={item.id} item={item}></SingleUtility>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Utility;
