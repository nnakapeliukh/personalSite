import React from "react-dom";
import AboutMe from "../aboutMe";
import Highlights from "../highlights";
import Projects from "../projects";
import HeroContent from "../heroContent";
function MainPage() {
  return (
    <>
      <HeroContent />
      <AboutMe />
      <Highlights />
      <Projects />
    </>
  );
}

export default MainPage;
