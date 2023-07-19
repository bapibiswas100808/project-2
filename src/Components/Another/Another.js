import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Another.css";

const Another = () => {
  return (
    <section className="another-area">
      <div className="project-sketch">
        <div className="another-content">
          <Row>
            <Col lg={6}>
              <div className="another-text">
                <h3 className="text-white pb-3">ANOTHER</h3>
                <p className="text-white">
                  Another-1 is the ultimate web3 luxury fashion platform built
                  on Polygon, where users can build, collect, stake, and trade
                  metaverse-ready digital fashion backed by NFC authenticated
                  physical goods. By repurposing fashion products via NFTs for
                  metaverse interoperability; Another-1 serves as a one-stop
                  shop for a new transcending asset class that merges realities
                  to create a dynamic ecosystem of hypebeasts, designers,
                  brands, and resellers secured on-chain.{" "}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <h3 className="text-white pb-3">CASADEI</h3>
              <p className="text-white">
                Casadei was born in 1958 in Rimini as a shoe factory that
                produced sandals for the national and international market.
                Cesare Casadei, son of the founders and creative director since
                1994, together with his team of designers, creates his
                collections using raw materials made exclusively for the maison.
                Casadei shoes, a true symbol of Made in Italy craftsmanship, are
                design accessories with refined and seductive details.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Another;
