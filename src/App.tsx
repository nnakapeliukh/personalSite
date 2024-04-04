import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/highlights.css";
// import lalptopImage from './assets/lap2.png';
import NavigationBar from "./components/navBar";
import MainPage from "./components/mainPage";
import AboutMe from "./components/aboutMe";
import Highlights from "./components/highlights";
import Projects from "./components/projects";
import { Helmet } from "react-helmet";
import nazarLogo from "./assets/nazarLogo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <title> Nazar&apos;s Webpage</title>
          <link rel="icon" type="image/png" href={nazarLogo} sizes="16x16" />
        </Helmet>
        <NavigationBar />
        <MainPage />
        <AboutMe />
        <Highlights />
        <Projects />
        {/* <div className="contentDiv">
         
          <span className="imageMainPage">
            <img src={lalptopImage} className="" alt="logo" />
          </span>
          <div className="rightSideDiv">
            <p>
              Finally, my website is online.
              <br />
              This is my first
              <a href="/weatherApp">WeatherApp</a>
              <br />
              Fun game of
              <a href="/battleship/">Battleship</a>
            </p>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
