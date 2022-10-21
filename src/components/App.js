import React, {useState, useEffect, useReducer} from 'react';
import bgmusic from '../bgmusic.mp3';
import '../styles/App.css';
import ClickPanel from './ClickPanel.js'
import InfoPanel from './InfoPanel.js'
import StorePanel from './StorePanel.js'
import Message from './Message.js'

 

function App() {
  
  const [potatoCount, setPotatoCount] = useState(10000)
  const [afkPotatoCount, setAfkPotatoCount] = useState(0)
  const [clickValue, setClickValue] = useState(1)
  const [autoClickValue, setAutoClickValue] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setAfkPotatoCount(afkPotatoCount => afkPotatoCount + autoClickValue) 
    }, 1000)
    return () => clearInterval(interval)
  }, [autoClickValue])
  
  return (
    <div className="App"> 
        <ClickPanel afkPotatoCount={afkPotatoCount} setAfkPotatoCount={setAfkPotatoCount} potatoCount={potatoCount} setPotatoCount={setPotatoCount} clickValue={clickValue}/>
        <InfoPanel autoClickValue={autoClickValue} clickValue={clickValue}/>
        <StorePanel afkPotatoCount={afkPotatoCount} setAfkPotatoCount={setAfkPotatoCount} potatoCount={potatoCount} setPotatoCount={setPotatoCount} autoClickValue={autoClickValue} setAutoClickValue={setAutoClickValue} clickValue={clickValue} setClickValue={setClickValue}/>
        <Message/>
    </div>
  );
}

export default App;

