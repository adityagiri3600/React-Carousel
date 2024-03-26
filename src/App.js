import React, { useState } from 'react';
import Carousel from './Carousel';
import './App.css';

function App() {

  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h1> {index} </h1>
      <Carousel transitionTime={0.3} getIndex={setIndex} loopback={true}>
        <div style={{ backgroundColor: 'red', height: '100px', width: '200px' }}>1</div>
        <div style={{ backgroundColor: 'green', height: '100px', width: '200px' }}>2</div>
        <div style={{ backgroundColor: 'blue', height: '100px', width: '200px' }}>3</div>
        <div style={{ backgroundColor: 'yellow', height: '100px', width: '200px' }}>4</div>
      </Carousel>
    </div>
  );
}

export default App;
