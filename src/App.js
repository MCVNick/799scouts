import React, { createRef } from 'react';
import './reset.css';
import './App.scss';

const cubScoutsLogo = require('./resources/cubScoutsLogo.png')
const boyScoutsLogo = require('./resources/boyScoutsLogo.png')
const cubScoutsBackground = require('./resources/test1.jpg')
const boyScoutsBackground = require('./resources/test2.jpg')

function handleHover(cub, divide, boy, choice) {
  if(choice === 'cub') {
    cub.current.classList.add('background-fill')
    cub.current.classList.add('delay-background-leave')
    divide.current.classList.add('divide-slide-right')
    boy.current.classList.add('background-leave')
  }
  else if (choice === 'boy'){
    boy.current.classList.add('background-fill')
    boy.current.classList.add('delay-background-leave')
    divide.current.classList.add('divide-slide-left')
    cub.current.classList.add('background-leave')
  }
  else {
    cub.current.classList.remove('background-fill')
    boy.current.classList.remove('background-fill')
    setTimeout(() => {
      cub.current.classList.remove('delay-background-leave')
      boy.current.classList.remove('delay-background-leave')
      boy.current.classList.remove('background-leave')
      cub.current.classList.remove('background-leave')
    }, 500);
    divide.current.classList.remove('divide-slide-left')
    divide.current.classList.remove('divide-slide-right')
  }
}

function App() {
  let cub = createRef()
  let divide = createRef()
  let boy = createRef()

  return (
    <div className="App">
      <h1 className='scout-header'>799 Scouting</h1>
      <div className='container'>
        <p className='req-220px'>You need at least 220px to view this website</p>
        <div onMouseEnter={() => {handleHover(cub, divide, boy, 'cub')}} onMouseLeave={() => {handleHover(cub, divide, boy)}}>
          <img className='cub-scouts-logo' src={cubScoutsLogo} alt='cubScoutsLogo'/>
        </div>
        <div onMouseEnter={() => {handleHover(cub, divide, boy, 'boy')}} onMouseLeave={() => {handleHover(cub, divide, boy)}}>
          <img className='boy-scouts-logo' src={boyScoutsLogo} alt='boyScoutsLogo'/>
        </div>
      </div>

      <div className='background'>
        <div ref={cub} className='top'>
          <div>
            <img src={cubScoutsBackground} alt='cubScoutsBackground'/>
          </div>
        </div>
        <div ref={divide} className='divide'></div>
        <div ref={boy} className='bottom'>
          <div>
            <img src={boyScoutsBackground} alt='boyScoutsBackground'/>        
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
