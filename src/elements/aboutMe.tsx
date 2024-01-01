import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { Button, Collapse, Image } from "react-bootstrap";
import faceRound from "../assets/faceRound.png";
import "./collapse.css";

function clickToSeeEmail(e: React.MouseEvent<HTMLButtonElement>) {
  const name = "nnakapeliukh";
  const mail = "@gmail.com";
  // elementToChange.target = `${name}${mail}`;
  // document.getElementById(){
  e.preventDefault();

  const text: HTMLButtonElement = e.currentTarget;
  if (text.textContent === `${name}${mail}`) {
    text.textContent = "Click to see email";
  } else text.textContent = `${name}${mail}`;
}

// make it array of objects that can have more info added as needed
const listOfSkills = [
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Git" },
  { name: "Node.js" },
  { name: "Electron" },
  { name: "Jest" },
  { name: "Bootstrap" },
  { name: "Express.js" },
  { name: "AWS" },
  { name: "C" },
  { name: "AHK" },
  { name: "Linux" },
  { name: "MongoDB" },
  { name: "NoSQL" },
  { name: "Webdesign" },
  { name: "And more..." },
];

export default function AboutMe() {
  const [isSkillsCollapseOpen, setIsSkillsCollapseOpen] = useState(false);
  return (
    <Container id="about">
      <Container className="shadow mt-5 p-4">
        <Row className="">
          <Col xs={12} md={6}>
            <Row>
              <Col xs={8} md={4} className="mx-auto">
                <Image
                  className="bg-dark mx-auto d-block shadow img-fluid "
                  src={faceRound}
                  roundedCircle
                />
              </Col>
              <Col xs={12} lg={7} className="">
                <p className="lh-lg text-center lead bold">
                  Nazar Nakapeliukh <br />
                  Electrical Engineer <br />
                  Full Stack Developer <br />
                </p>
                <Button
                  onClick={clickToSeeEmail}
                  style={{ userSelect: "text" }}
                  className="bg-light text-black mx-auto d-block btn-outline-light shadow"
                >
                  Click to see email
                </Button>
              </Col>
            </Row>
            <Row className="pt-4 ">
              <h4>Skills</h4>
              <Col className="module" xs>
                <Collapse in={isSkillsCollapseOpen}>
                  <div id="collapseExample" className="pb-3">
                    {listOfSkills.map((skill) => (
                      <Button
                        key={skill.name}
                        className="m-2 bg-light btn-outline-light text-black shadow hover-overlay"
                      >
                        {skill.name}
                      </Button>
                    ))}
                  </div>
                </Collapse>
                <div className="m-2 text-center">
                  <a
                    role="button"
                    className="collapsed"
                    // href="#collapseExample"
                    onClick={() =>
                      setIsSkillsCollapseOpen(!isSkillsCollapseOpen)
                    }
                    aria-controls="collapseExample"
                    aria-expanded="false"
                  >
                    Show more
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h3>About me</h3>
            <p className="lead">
              Hi, my name is Nazar and I&apos;m interested in everything tech. I
              have stong background in designing complex systems and executing
              various parts of the design: from UX design to PCB design. All of
              these things are integrated to become a successful product. I know
              how to bring value and I do so by finding areas that need
              impovement and implement these changes.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
