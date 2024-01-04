import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Image } from "react-bootstrap";
import "./highlights.css";
import darkenBackground from "../assets/darkenBackground.png";
import wetherAppPic from "../assets/weatherApp.png";
import weatherLogo from "../assets/WeatherLogo.svg";
import battleshipPic from "../assets/battleship.png";
import battleshipIcon from "../assets/battleshipIcon.svg";
import shoppingcartPic from "../assets/shoppingcart.png";
import shoppingcartIcon from "../assets/shoppingcartLogo.svg";
const listOfProjects = [
  {
    name: "Weather App",
    link: "/weatherapp",
    description:
      "This page uses API to fetch data from weather data bank \
    and image from image stock depending on weather",
    image: wetherAppPic,
    logo: weatherLogo,
  },
  {
    name: "Battleship",
    link: "/battleship",
    description: "Good old Battleship game. Written in pure JavaScript.",
    image: battleshipPic,
    logo: battleshipIcon,
  },
  {
    name: "Shopping Cart",
    link: "/shoppingcart",
    description:
      "A little shop that uses external API to get \
    store items. Implements shopping cart that saves items you buy \
    and calculates the total",
    image: shoppingcartPic,
    logo: shoppingcartIcon,
  },
];

export default function Projects() {
  return (
    <Container id="projects">
      <Container className=" mt-5 mb-5 p-4" id="projects">
        <Row className="text-center">
          <h3 className="">Projects</h3>
          {listOfProjects.map((project) => (
            <Col
              xs={12}
              md={4}
              key={project.name}
              className=" mt-4 highlight-container pb-1"
            >
              <a href={project.link} className="link-opacity-10">
                <Container
                  className="mt-1 shadow h-100 rounded-3"
                  style={{
                    backgroundImage: `url(${darkenBackground}), url(${project.image})`,
                    // width: "100%",
                    // height: "100px",
                    backgroundPosition: "50% 50%",
                    backgroundSize: "100% 100%, auto 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Image
                    src={project.logo}
                    width={"30%"}
                    className="highlight-logo img-fluid rounded-3 p-1 m-3"
                  />
                  <h4 className="m-2 bg-dark text-white rounded-3">
                    {project.name}
                  </h4>
                  <p className="m-2 bg-dark text-white rounded-3">
                    {project.description}
                  </p>
                </Container>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
