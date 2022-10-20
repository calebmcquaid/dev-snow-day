import './App.css';
import React, {useState} from 'react';

function App() {
  const [isSnowing, setIsSnowing] = useState(false);

  return (
    <div style={{backgroundColor: 'white'}}>
      <h1 style={{color: 'black'}}>Is it snowing?</h1>
      {isSnowing ? (
        <h1 style={{color: 'black'}}>Woah! Snow! Go outside and build a snowman!</h1>
        ) : (
        <h1 style={{color: 'black'}}>Nah... back to work</h1>
      )}
    </div>
  );
}

export default App;
