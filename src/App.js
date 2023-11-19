import './App.css';
import Header from './elements/elements';
import lalptopImage from './assets/lap2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Header />
        <div className='contentDiv'>
          <span className='imageMainPage'>
           <img src={lalptopImage} className="" alt="logo" />
          </span>
          <div className='rightSideDiv'>vasya
            <p>
              Finally, my website is online.<br/>
              This is my first <a href="/weatherApp">WeatherApp</a><br/>
              Fun game of <a href="/battleship/">Battleship</a>
            </p>   
          </div>     
        </div>
        
      </header>
    </div>
  );
}

export default App;
