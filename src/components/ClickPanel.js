import React, {useState} from 'react';
import '../styles/ClickPanel.css'
import potato from '../images/Ziemniak.webp'
function ClickPanel(props) {
    const [name, setName] = useState('Set farm name')
    const handleChangeName = ()=>{
        const newName = prompt(`Choose your potato farm name:`)
        if(newName.length > 36) {
            alert('Name cannot have more than 36 letters, pick different one.')
            return;
        }
        
        setName(newName)
    }
    const handleCollect = ()=>{
        props.setAfkPotatoCount(0)
        props.setPotatoCount(props.potatoCount + props.afkPotatoCount)
    }
    return ( 
        <div className='clickPanel'>
            <button className='name' onClick={handleChangeName}>{name}</button>
            <h1 className='potatoCount'>{props.potatoCount > 0 ? props.potatoCount.toFixed(2) : props.potatoCount}</h1>
            <img onClick={() => props.setPotatoCount(props.potatoCount+props.clickValue)} src={potato} alt="" />
            <div className="afk">
            <h1 className="afkStorage">AFK storage</h1>
            <h1 className="afkPotatoCount">{props.afkPotatoCount.toFixed(2)}</h1>
            <button className="collect" onClick={handleCollect}>Collect</button>
            </div>
        </div>
    );
}

export default ClickPanel;