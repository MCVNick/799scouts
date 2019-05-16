import React, { createRef } from 'react';
import './reset.css';
import './App.scss';

const cubScoutsLogo = require('./resources/cubScoutsLogo.png')
const boyScoutsLogo = require('./resources/boyScoutsLogo.png')
const cubScoutsBackground = require('./resources/test1.jpg')
const boyScoutsBackground = require('./resources/test2.jpg')

function handleHover(cub, divide, boy, free, choice) {
  const cub2 = cub.current.classList
  const divide2 = divide.current.classList
  const boy2 = boy.current.classList
  
  console.log(free, cub, divide, boy, choice.current)
  if (choice.current !== null) {
    setTimeout(() => {
      handleHover(cub, divide, boy, free, choice)
    }, 600);
  }

  if (!free.current) {
    if(choice.current === 'cub') {
      cub2.add('background-fill')
      cub2.add('delay-background-leave')
      divide2.add('divide-slide-right')
      boy2.add('background-leave')
    }
    else if (choice.current === 'boy'){
      boy2.add('background-fill')
      boy2.add('delay-background-leave')
      divide2.add('divide-slide-left')
      cub2.add('background-leave')
    }
    else {
      free.current = 1
      divide2.remove('divide-slide-left')
      divide2.remove('divide-slide-right')
      cub2.remove('background-fill')
      boy2.remove('background-fill')
      setTimeout(() => {
        cub2.remove('delay-background-leave')
        boy2.remove('delay-background-leave')
        boy2.remove('background-leave')
        cub2.remove('background-leave')
        free.current = null
      }, 500);
    }
  }
}

function App() {
  let cub = createRef()
  let divide = createRef()
  let boy = createRef()
  let free = createRef()
  let choice = createRef()

  return (
    <div className="App">
      <h1 className='scout-header'>799 Scouts</h1>
      <div className='container'>
        <p className='req-220px'>You need at least 220px to view this website</p>
        <div onMouseEnter={() => {choice.current = 'cub'; handleHover(cub, divide, boy, free, choice)}} onMouseLeave={() => {choice.current = null; handleHover(cub, divide, boy, free, choice)}}>
          <img className='cub-scouts-logo' src={cubScoutsLogo} alt='cubScoutsLogo'/>
        </div>
        <div onMouseEnter={() => {choice.current = 'boy'; handleHover(cub, divide, boy, free, choice)}} onMouseLeave={() => {choice.current = null; handleHover(cub, divide, boy, free, choice)}}>
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
