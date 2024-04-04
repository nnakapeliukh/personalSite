import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import cssLogo from "../assets/bcssLogo.svg";
import customLogo from "../assets/customLogo.svg";
import engLogo from "../assets/engLogo.svg";
import responsiveLogo from "../assets/responsiveLogo.svg";
import reactTSLogo from "../assets/reactTSLogo.svg";
import growthLogo from "../assets/growthLogo.svg";
import { Image } from "react-bootstrap";
import "./highlights.css";

const listOfHighlights = [
  {
    name: "React and TypeScript",
    description: "This website is built with React and TypeScript",
    logo: reactTSLogo,
  },
  {
    name: "Bootsrap and Custom CSS",
    description:
      "This website is built with Bootstrap and \
    custom CSS",
    logo: cssLogo,
  },
  {
    name: "Original Content",
    description:
      "All images and icons you see on this website were drawn and created by me",
    logo: customLogo,
  },
  {
    name: "Engineering Experience",
    description:
      "7 years of engineering, design and development \
    experience",
    logo: engLogo,
  },
  {
    name: "Responsive Design",
    description: "Renders well on all webpage sizes. Try it out!",
    logo: responsiveLogo,
  },
  {
    name: "Growth",
    description:
      "I strongly beleive in and strive for growth. Only by improving \
    yourself can you make the difference",
    logo: growthLogo,
  },
];

export default function Highlights() {
  return (
    <Container>
      <Container className=" mt-5 mb-5 p-4" id="highlights">
        <Row className="text-center">
          <h3 className="">Highlights</h3>
          {listOfHighlights.map((highlight) => (
            <Col
              xs={12}
              md={4}
              key={highlight.name}
              className=" mt-4 highlight-container pb-1"
            >
              <Container className="mt-1 shadow h-100 rounded-3">
                <Image
                  src={highlight.logo}
                  width={"30%"}
                  className="highlight-logo img-fluid rounded-3 p-1 m-3"
                />
                <h4 className="m-2">{highlight.name}</h4>
                <p className="m-2">{highlight.description}</p>
              </Container>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
