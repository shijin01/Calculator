import './App.css';
import Display from './Display';
import { useState } from 'react';
import Keypad from './Keypad';
function App() {
  const [val, setValue] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <Display val={val} />
        <Keypad val={val} stvl={setValue} />
      </header>
      
    </div>
  );
}

export default App;
