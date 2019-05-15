import React from 'react';
import './reset.css';
import './App.scss';

const cubScoutsLogo = require('./resources/cubScoutsLogo.png')
const boyScoutsLogo = require('./resources/boyScoutsLogo.png')

function App() {
  return (
    <div className="App">
      <h1 className='scout-header'>799 Scouting</h1>
      <div className='container'>
        <p className='req-220px'>You need at least 220px to view this website</p>
        <div>
          <img className='cub-scouts-logo' src={cubScoutsLogo} alt='cubScoutsLogo'/>
        </div>
        <div>
          <img className='boy-scouts-logo' src={boyScoutsLogo} alt='boyScoutsLogo'/>
        </div>
      </div>
    </div>
  );
}

export default App;
