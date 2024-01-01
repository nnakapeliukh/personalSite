import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import mountainBgd from "../assets/mountainEnhanced.jpg";

function MainPage() {
  return (
    <Container
      className="hero route bg-image min-vw-100"
      style={{
        backgroundImage: `url(${mountainBgd})`,
        height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 50%",
      }}
    >
      <Container>
        <Row>
          <Col xs style={{ height: "100vh" }}>
            <p
              style={{
                // height: '40%',
                paddingTop: "20%",
                textShadow: "11px 11px 11px #000",
                color: "white",
                fontFamily: "arial, serif",
              }}
              className="display-2 fw-bold lh-lg text-center"
            >
              Hi, I&apos;m Nazar
            </p>
            <p
              style={{
                // paddingTop: '40%',
                // height: '30%',
                textShadow: "11px 11px 11px #000",
                color: "white",
                fontFamily: "arial, serif",
              }}
              className="display-6 align-left lh-lg text-center"
            >
              and I thrive on challenge
            </p>
          </Col>
          <Col xs={12} md>
            {/* Placeholder */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MainPage;
