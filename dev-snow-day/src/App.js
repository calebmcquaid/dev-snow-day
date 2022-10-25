import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [isSnowing, setIsSnowing] = useState(false);
  const [githubStatus, setGithubStatus] = useState(null);

  const getGithubStatus = async () => {
    const status = await fetch('https://www.githubstatus.com/api/v2/status.json');
    const statusJson = await status.json();
    console.log({status})
    console.log({statusJson})
    setGithubStatus(statusJson.status.description);
  }

  useEffect(() => {
    getGithubStatus()
  },[])

  return (
    <div style={{backgroundColor: 'white'}}>
      <h1 style={{color: 'black'}}>Is it snowing?</h1>
      {isSnowing ? (
        <h1 style={{color: 'black'}}>Woah! Snow! Go outside and build a snowman!</h1>
        ) : (
        <h1 style={{color: 'black'}}>Nah... back to work</h1>
      )}
      <h1>GitHub Status</h1>
      {githubStatus}
    </div>
  );
}

export default App;
