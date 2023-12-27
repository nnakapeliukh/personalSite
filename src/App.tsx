import React from 'react';
import './App.css';
import AccountMenu from './elements/elements';
import lalptopImage from './assets/lap2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contentDiv">
          <AccountMenu />
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
        </div>
      </header>
    </div>
  );
}

export default App;
