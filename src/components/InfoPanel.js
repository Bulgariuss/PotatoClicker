import {React, useState, useEffect} from 'react';
import '../styles/InfoPanel.css';
import bgmusic from '../bgmusic.mp3';
import Player from './Music.js'

function InfoPanel(props) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
    setTimeout(() => {
      setSeconds((count) => count + 1);
    }, 1000);
  }, [seconds]);
    const handleSections = (section)=>{
        
        document.querySelector('div.content').classList.remove('hidden')

        document.querySelectorAll('.content section').forEach(e =>{e.classList.add('hidden')})

        if(section === "achievements") {document.querySelector('section.achievements').classList.remove('hidden')}
        if(section === "info") {document.querySelector('section.info').classList.remove('hidden')}
        if(section === "options") {document.querySelector('section.options').classList.remove('hidden')}

        if(section === "close") {document.querySelector('div.content').classList.add('hidden')}
    }
    return ( 
        <div className="infoPanel"> 
               <div className="menu">
                <button onClick={()=>{handleSections("achievements")}}>Achievements</button>
                <button onClick={()=>{handleSections("info")}}>Info</button>
                <button onClick={()=>{handleSections("options")}}>Options</button>
               </div>
               <div className="content hidden">
                <section className="achievements hidden">
                    <h1 className="sectionTitle">Achievements</h1>
                    <h2 onClick={()=>{handleSections("close")}}>X</h2>
                </section>
                <section className="info hidden">
                    <h1 className="sectionTitle">Info</h1>
                    <h2 onClick={()=>{handleSections("close")}}>X</h2>
                    <p>Website is running for: {seconds} seconds</p>
                    <p>Your current click value is: {props.clickValue.toFixed(2)}</p>
                    <p>Your current auto-click value is: {props.autoClickValue.toFixed(2)}</p>
                </section>
                <section className="options">
                    <h1 className="sectionTitle">Options</h1>
                    <h2 onClick={()=>{handleSections("close")}}>X</h2>
                    <Player/>
                </section>
               </div>
        </div>
     );
}

export default InfoPanel;