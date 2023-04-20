import { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';



function App() {
  const [show, setShow] = useState(false)    
  return (
    <div id="container">
        <h2>The useEffect Example</h2>
        <div id='check-container'>
          <input id='check' type='checkbox' onClick={e => setShow(e.target.checked)}></input>
          <label htmlFor='check'>Show message </label>
        </div>
        {show && <Message />}
    </div>
  );
}

export default App;
