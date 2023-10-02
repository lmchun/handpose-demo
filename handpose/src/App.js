import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import './App.css';
import Webcam from "react-webcam";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Oct 2: installed dependencies

          following tutorial: https://youtu.be/f7uBsb-0sGQ?si=LdIC1BQismUatzHF
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
