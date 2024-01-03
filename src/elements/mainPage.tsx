import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import mountainBgd from "../assets/mountainEnhanced.jpg";
import cloudsBgd from "../assets/clouds.png";
import cloudsBgd2 from "../assets/clouds2.png";
import cloudsBgd3 from "../assets/clouds3.png";
import "./mainPage.css";
// import { Image } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Container
        className="hero route bg-image min-vw-100 p-0"
        style={{
          backgroundImage: `url(${mountainBgd})`,
          height: "100vh, 100vh",
          width: "100%, 100%",
          backgroundAttachment: "fixed",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
        }}
        id="home"
      >
        {/* Animated clouds */}
        <div
          className="hero route bg-image min-vw-100 p-0 m-0 animate1"
          style={{
            backgroundImage: `url(${cloudsBgd})`,
            height: "100vh",
            width: "100px",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            zIndex: " 0",
          }}
        />
        <div
          className="hero route bg-image min-vw-100 p-0 m-0 animate1"
          style={{
            backgroundImage: `url(${cloudsBgd2})`,
            height: "100vh",
            width: "100px",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            zIndex: " 0",
          }}
        />
        <div
          className="hero route bg-image min-vw-100 p-0 m-0 animate2"
          style={{
            backgroundImage: `url(${cloudsBgd3})`,
            height: "100vh",
            width: "100px",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            zIndex: " 0",
          }}
        />

        <Container>
          <Row>
            <Col
              xs
              style={{
                height: "100vh",
                paddingTop: "10%",
                zIndex: "1",
              }}
            >
              <Container
                // className="bg-dark"
                style={{
                  borderRadius: "20px",
                  fontFamily: "Monospace",
                }}
              >
                <p
                  style={{
                    textShadow: "11px 11px 11px #000",
                    color: "white",
                  }}
                  className="display-2 fw-bold lh-lg text-center  bg-dark py-0"
                >
                  Hi, I&apos;m Nazar
                </p>
                <p
                  style={{
                    // paddingTop: '40%',
                    // height: '30%',
                    textShadow: "11px 11px 11px #000",
                    color: "white",
                  }}
                  className="display-6 align-left lh-lg text-center bg-dark"
                >
                  and I thrive on challenge
                </p>
              </Container>
            </Col>
            <Col xs={12} md>
              {/* Placeholder */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default MainPage;
