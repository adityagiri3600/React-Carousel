import logo from './logo.svg';
import Carousel from './Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel transitionTime={0.3}>
        <div style={{ backgroundColor: 'red', height: '100px', width: '200px' }}></div>
        <div style={{ backgroundColor: 'green', height: '100px', width: '200px' }}></div>
        <div style={{ backgroundColor: 'blue', height: '100px', width: '200px' }}></div>
        <div style={{ backgroundColor: 'yellow', height: '100px', width: '200px' }}></div>
      </Carousel>
    </div>
  );
}

export default App;
