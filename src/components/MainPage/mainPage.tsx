import React from "react-dom";
import AboutMe from "../aboutMe";
import Highlights from "../highlights";
import Projects from "../projects";
import { Helmet } from "react-helmet";
import nazarLogo from "../../assets/nazarLogo.png";
import HeroContent from "../heroContent";
function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <title> Nazar&apos;s Webpage</title>
          <link rel="icon" type="image/png" href={nazarLogo} sizes="16x16" />
        </Helmet>
        <HeroContent />
        <AboutMe />
        <Highlights />
        <Projects />
      </header>
    </div>
  );
}

export default MainPage;