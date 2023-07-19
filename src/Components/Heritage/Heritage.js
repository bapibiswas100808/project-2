import React from "react";
import "./Heritage.css";

const Heritage = () => {
  return (
    <section className="heritage-area">
      <div className="project-sketch">
        <div className="heritage-content">
          <div className="heritage-text">
            <h1 className="text-white text-center pb-4">CASADEI HERITAGE</h1>
            <p className="text-white pb-4">
              Web3 Craftsmanship - The quality of design and work shown in
              something made by hand is finally transcending the physical realm.
              <br /> <br />
              This project is a statement regarding the future of fashion as
              much as it is a collaboration between two like-minded companies
              shaking up the status quo and setting new standards in the world
              of luxury.
            </p>
          </div>
          <div className="heritage-video">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
