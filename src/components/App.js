import React, {useState} from 'react';
import '../styles/App.css';
import ClickPanel from './ClickPanel.js'
function App() {
  const [potatoCount, setPotatoCount] = useState(0)
  
  return (
    <div className="App">
        <ClickPanel potatoCount={potatoCount} setPotatoCount={setPotatoCount}/>
    </div>
  );
}

export default App;
