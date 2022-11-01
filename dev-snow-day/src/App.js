import './App.css';
import React, {useEffect, useState} from 'react';
import { HealthClient, DescribeAffectedAccountsForOrganizationCommand } from "@aws-sdk/client-health";

function App() {
  const [isSnowing, setIsSnowing] = useState(false);
  const [githubStatus, setGithubStatus] = useState(null);
  const [awsStatus, setAwsStatus] = useState(null);

  const getGithubStatus = async () => {
    const status = await fetch('https://www.githubstatus.com/api/v2/status.json');
    const statusJson = await status.json();
    console.log({status})
    console.log({statusJson})
    setGithubStatus(statusJson.status.description);
  }

  const getAwsStatus = async () => {
    const client = new HealthClient({ region: "us-east-1" });

    const params = {
      /** input parameters */
    };
    const command = new DescribeAffectedAccountsForOrganizationCommand(params);

    try {
    const data = await client.send(command);
      console.log({data})
    } catch (error) {
      console.log(error);
    } finally {
      setAwsStatus(data);
    }
  }

  useEffect(() => {
    getGithubStatus()
    getAwsStatus()
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
      <h1>AWS Status</h1>
      {awsStatus}
    </div>
  );
}

export default App;
