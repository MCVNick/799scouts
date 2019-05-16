import React, { createRef } from 'react';
import './reset.css';
import './App.scss';

const cubScoutsLogo = require('./resources/cubScoutsLogo.png')
const boyScoutsLogo = require('./resources/boyScoutsLogo.png')
const cubScoutsBackground = require('./resources/test1.jpg')
const boyScoutsBackground = require('./resources/test2.jpg')

function handleHover(dataObj) {
  let { cub, cubLogo, divide, boy, boyLogo, choice, defaultHeader, packHeader, troopHeader } = dataObj
  const cubList = cub.current.classList
  const divideList = divide.current.classList
  const boyList = boy.current.classList
  const cubLogoList = cubLogo.current.classList
  const boyLogoList = boyLogo.current.classList
  const defaultHeaderList = defaultHeader.current.classList
  const packHeaderList = packHeader.current.classList
  const troopHeaderList = troopHeader.current.classList

  if (choice !== null) {
    setTimeout(() => {
      handleHover(dataObj)
    }, 600);
  }

  if (!dataObj.free) {
    if (choice === 'cub') {
      cubList.add('background-fill')
      cubList.add('delay-background-leave')
      divideList.add('divide-slide-right')
      boyList.add('background-leave')
      boyLogoList.add('fade-out')
      packHeaderList.remove('fade-out')
      defaultHeaderList.add('fade-out')
      troopHeaderList.add('fade-out')
    }
    else if (choice === 'boy') {
      boyList.add('background-fill')
      boyList.add('delay-background-leave')
      divideList.add('divide-slide-left')
      cubList.add('background-leave')
      cubLogoList.add('fade-out')
      troopHeaderList.remove('fade-out')
      defaultHeaderList.add('fade-out')
      packHeaderList.add('fade-out')
    }
    else {
      dataObj.free = 1
      divideList.remove('divide-slide-left')
      divideList.remove('divide-slide-right')
      cubList.remove('background-fill')
      boyList.remove('background-fill')
      setTimeout(() => {
        cubList.remove('delay-background-leave')
        boyList.remove('delay-background-leave')
        boyList.remove('background-leave')
        cubList.remove('background-leave')
        boyLogoList.remove('fade-out')
        cubLogoList.remove('fade-out')
        defaultHeaderList.remove('fade-out')
        packHeaderList.add('fade-out')
        troopHeaderList.add('fade-out')
        dataObj.free = null
      }, 500);
    }
  }
}

function App() {
  const dataObj = {
    cub: createRef(),
    cubLogo: createRef(),
    divide: createRef(),
    boy: createRef(),
    boyLogo: createRef(),
    defaultHeader: createRef(),
    packHeader: createRef(),
    troopHeader: createRef(),
    free: null,
    choice: null
  }
  let { cub, cubLogo, divide, boy, boyLogo, defaultHeader, packHeader, troopHeader } = dataObj

  return (
    <div className="App">
      <h1 ref={defaultHeader} className='scout-header'>799 Scouts</h1>
      <h1 ref={packHeader} className='scout-header fade-out'>Pack 799</h1>
      <h1 ref={troopHeader} className='scout-header fade-out'>Troop 799 </h1>
      <div className='container'>
        <p className='req-220px'>You need at least 220px to view this website</p>
        <div
          onMouseEnter={() => { dataObj.choice = 'cub'; handleHover(dataObj) }}
          onMouseLeave={() => { dataObj.choice = null; handleHover(dataObj) }}
        >
          <img ref={cubLogo} className='cub-scouts-logo' src={cubScoutsLogo} alt='cubScoutsLogo' />
        </div>
        <div
          onMouseEnter={() => { dataObj.choice = 'boy'; handleHover(dataObj) }}
          onMouseLeave={() => { dataObj.choice = null; handleHover(dataObj) }}
        >
          <img ref={boyLogo} className='boy-scouts-logo' src={boyScoutsLogo} alt='boyScoutsLogo' />
        </div>
      </div>

      <div className='background'>
        <div ref={cub} className='top'>
          <div>
            <img src={cubScoutsBackground} alt='cubScoutsBackground' />
          </div>
        </div>
        <div ref={divide} className='divide'></div>
        <div ref={boy} className='bottom'>
          <div>
            <img src={boyScoutsBackground} alt='boyScoutsBackground' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
