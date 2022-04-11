import React, {useState} from 'react';
import '../styles/ClickPanel.css'
import potato from '../images/Ziemniak.webp'
function ClickPanel(props) {
    const [name, setName] = useState('Nazwa')
    const handleChangeName = ()=>{
        const newName = prompt(`Choose your potato farm's name:`)
        setName(newName)
    }
    return ( 
        <div className='clickPanel'>
            <button className='name' onClick={handleChangeName}>{name}</button>
            <h1 className='potatoCount'>{props.potatoCount}</h1>
            <img onClick={() => props.setPotatoCount(props.potatoCount+1)} src={potato} alt="" />
        </div>
    );
}

export default ClickPanel;