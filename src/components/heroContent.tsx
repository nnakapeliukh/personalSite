import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import mountainBgd from "../assets/mountainEnhancedColor.jpg";
import transFont from "../assets/trans-font.png";
import cloudsBgd from "../assets/clouds.png";
import cloudsBgd2 from "../assets/clouds2.png";
import cloudsBgd3 from "../assets/clouds3.png";
import "./heroContent.css";

function HeroContent() {
  return (
    <>
      <Container
        className="hero route bg-image min-vw-100 p-0"
        style={{
          backgroundImage: `url(${mountainBgd})`,
          height: "100vh",
          width: "100%",
          backgroundAttachment: "scroll",
          // backgroundAttachment: "fixed",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="home"
      >
        <div
          className="hero route bg-image min-vw-100 p-0 m-0"
          style={{
            backgroundImage: `url(${transFont})`,
            height: "100vh",
            width: "100vw",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            zIndex: " 0",
          }}
        />
        <div
          className="hero route bg-image min-vw-100 p-0 m-0 animate1"
          style={{
            backgroundImage: `url(${cloudsBgd})`,
            height: "100vh",
            width: "100px",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
            backgroundSize: "cover",
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
            backgroundSize: "cover",
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
                zIndex: "1",
              }}
            >
              <Container
                // className="bg-dark"
                style={{
                  fontFamily: "Monospace",

                  paddingTop: "20%",
                }}
              >
                <div
                  className=""
                  style={
                    {
                      // backgroundColor: "#00000077",
                      // borderRadius: "10px",
                      // boxShadow: "0px 0px 50px inset #000000",
                      // lineHeight: "0.8",
                    }
                  }
                >
                  <p
                    style={{
                      textShadow: "11px 11px 11px #000",
                      color: "white",
                      // lineHeight: "0.8",
                    }}
                    className="display-2 fw-bold  text-center px-1 my-0 py-0"
                  >
                    {/* Hi, I&apos;m Nazar */}
                    {/* Your&apos;s is the Earth, */}
                  </p>
                  <p
                    style={{
                      // paddingTop: '40%',
                      // height: '30%',
                      textShadow: "11px 11px 11px #000",
                      color: "white",
                      lineHeight: "1",
                    }}
                    className="display-6 align-left text-center py-2"
                  >
                    {/* and I thrive on challenge */}
                    {/* and everything that&apos;s in it */}
                  </p>
                </div>
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

export default HeroContent;
