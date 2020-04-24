import React from 'react';
import Fade from 'react-reveal/Fade';
import jatinimg from './img/jatin.jpg';
import {Helmet} from 'react-helmet';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Helmet>
        <style>{'body{ background-color: #25252a; font-family: Arial serif} img{border-radius: 50%; width: 100%; position: absolute; top: -200px;} h1{color: #ebebeb;}'}</style>
      </Helmet>

      <Fade duration={2500}>
        <Nav />
        <div id='site-container' style={{
          position: 'absolute', left:'45%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>

          <img src={jatinimg} alt='Its Me JC' />
          <h1>Coming Soon</h1>

        </div>
      </Fade>
    </div>
  );
}

export default App;
