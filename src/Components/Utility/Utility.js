import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Utility.css";
import SingleUtility from "../SingleUtility/SingleUtility";

const Utility = () => {
  const [utility, setUtility] = useState([]);
  useEffect(() => {
    fetch("Utility.json")
      .then((res) => res.json())
      .then((data) => setUtility(data));
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="utility-area">
      <div className="project-sketch">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {utility.map((item) => (
            <SingleUtility key={item.id} item={item}></SingleUtility>
          ))}
        </Carousel>
        ;
      </div>
    </section>
  );
};

export default Utility;
