import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Hero.css";
import Header from "../Header/Header";
import heroImage from "../../../src/Images/hero-gif.gif";
import Countdown from "../Countdown/Countdown";

const Hero = () => {
  return (
    <section className="hero-area">
      <Header />
      <div className="hero-content project-sketch">
        <div className="hero-elements">
          <Row>
            <Col lg={5}>
              <div className="hero-element-text">
                <div className="hero-heading">
                  <h5 className="text-white">
                    /<span>/</span> The year is 2049...
                  </h5>
                </div>
                <h1 className="text-white hero-text-heading">
                  THE PROJECT NAYOM1
                </h1>
                <p className="text-white hero-para pt-4">
                  PROJECT NAYOM1 NFT Collection is a collaborative project by
                  Another-1 & Casadei, creatively directed by shoe designer
                  Ricardo Cook and artistically supported by 3D artist
                  HardMetaCore. <br /> <br />
                  There are 1000 NFTs, all with unique PFPs, all with amazing
                  phygital perks, all a statement to the powerful synergy of the
                  fashion world and web3. Each NFT allows for the physical
                  forging of the limited edition ‘NAYOM1 Blade’ heels.
                </p>
                <Countdown />
              </div>
            </Col>
            <Col lg={7}>
              <div className="hero-element-image design">
                <img className="w-100" src={heroImage} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Hero;
