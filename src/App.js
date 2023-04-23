import logo from './logo.svg';
import './App.css';
import FirstComponent from "../src/components/FirstComponent"
import Secoundcomponent from './components/Secoundcomponent';
import ThirdComponent from './components/ThirdComponent';
import { useState } from 'react';

function App() {
  
  const [username,setUserName] = useState("")
  const [password,setPassword] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='Enter username'  type="text" value={username} onChange={(v)=>setUserName(v.target.value)} ></input>
        <p>{username}</p>
        <input placeholder='Enter password' type='password' value={password} onChange={(event)=>setPassword(event.target.value)} ></input>
      </header>
    </div>
  );
}

export default App;