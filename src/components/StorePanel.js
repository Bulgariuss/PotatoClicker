import React, { createFactory, useState } from 'react';
import '../styles/StorePanel.css';
import upgrades from './UpgradesData.js';
import potato from '../images/Ziemniak.webp'
import cursor from '../images/cursor.png'

function StorePanel(props) {
    const [up1Hidden, setUp1Hidden] = useState(true)
    const [up2Hidden, setUp2Hidden] = useState(true)
    const [up3Hidden, setUp3Hidden] = useState(true)
    const [up4Hidden, setUp4Hidden] = useState(true)
    const [up5Hidden, setUp5Hidden] = useState(true)
    const [up6Hidden, setUp6Hidden] = useState(true)

    const [up1Bought, setUp1Bought] = useState(false)
    const [up2Bought, setUp2Bought] = useState(false)
    const [up3Bought, setUp3Bought] = useState(false)
    const [up4Bought, setUp4Bought] = useState(false)
    const [up5Bought, setUp5Bought] = useState(false)
    const [up6Bought, setUp6Bought] = useState(false)

    const [b1Hidden, setB1Hidden] = useState(true)
    const [b2Hidden, setB2Hidden] = useState(true)
    const [b3Hidden, setB3Hidden] = useState(true)
    const [b4Hidden, setB4Hidden] = useState(true)
    const [b5Hidden, setB5Hidden] = useState(true)
    const [b6Hidden, setB6Hidden] = useState(true)

    const [b1Count, setb1Count] = useState(0)
    const [b2Count, setb2Count] = useState(0)
    const [b3Count, setb3Count] = useState(0)
    const [b4Count, setb4Count] = useState(0)
    const [b5Count, setb5Count] = useState(0)
    const [b6Count, setb6Count] = useState(0)


    const handleBuildings = (e)=>{
        // console.log(e.target)
        // console.log(e.currentTarget)
        if (e.currentTarget.classList.contains('1') && props.potatoCount >= 25) {
            setb1Count(b1Count + 1)
            props.setAutoClickValue(props.autoClickValue + 0.2)
            props.setPotatoCount(props.potatoCount - 25)
        }
        if (e.currentTarget.classList.contains('2') && props.potatoCount >= 50) {
            setb2Count(b2Count + 1) 
            props.setAutoClickValue(props.autoClickValue + 0.45)
            props.setPotatoCount(props.potatoCount - 50)
        }
        if (e.currentTarget.classList.contains('3') && props.potatoCount >= 100) {
            setb3Count(b3Count + 1)
            props.setAutoClickValue(props.autoClickValue + 0.95)
            props.setPotatoCount(props.potatoCount - 100)
        }
        if (e.currentTarget.classList.contains('4') && props.potatoCount >= 250) {
            setb4Count(b4Count + 1)
            props.setAutoClickValue(props.autoClickValue + 1.95)
            props.setPotatoCount(props.potatoCount - 250)
        }
        if (e.currentTarget.classList.contains('5') && props.potatoCount >= 500) {
            setb5Count(b5Count + 1)
            props.setAutoClickValue(props.autoClickValue + 4)
            props.setPotatoCount(props.potatoCount - 500)
        }
        if (e.currentTarget.classList.contains('6') && props.potatoCount >= 1000) {
            setb6Count(b6Count + 1)
            props.setAutoClickValue(props.autoClickValue + 8.2)
            props.setPotatoCount(props.potatoCount - 1000)
        }
        // if (e.currentTarget.classList.contains('7')) {setb7Count(b7Count + 1)
        // props.setAutoClickValue(props.autoClickValue + 0.2)}
        // if (e.currentTarget.classList.contains('8')) {setb8Count(b8Count + 1)
        // props.setAutoClickValue(props.autoClickValue + 0.2)}
        // if (e.currentTarget.classList.contains('9')) {setb9Count(b9Count + 1)
        // props.setAutoClickValue(props.autoClickValue + 0.2)}
    }
    const showUpInfo = (number)=> {
        if(number === 1) setUp1Hidden(!up1Hidden)
        if(number === 2) setUp2Hidden(!up2Hidden)
        if(number === 3) setUp3Hidden(!up3Hidden)
        if(number === 4) setUp4Hidden(!up4Hidden)
        if(number === 5) setUp5Hidden(!up5Hidden)
        if(number === 6) setUp6Hidden(!up6Hidden)
    }
    const showBInfo = (number)=> {
        if(number === 1) setB1Hidden(!b1Hidden)
        if(number === 2) setB2Hidden(!b2Hidden)
        if(number === 3) setB3Hidden(!b3Hidden)
        if(number === 4) setB4Hidden(!b4Hidden)
        if(number === 5) setB5Hidden(!b5Hidden)
        if(number === 6) setB6Hidden(!b6Hidden)
    }
    const buyUpgrade = (number, e)=> { 
        if(number === 1 && props.potatoCount >= 100){
            setUp1Bought(true)
            props.setPotatoCount(props.potatoCount - 100)
            props.setClickValue(props.clickValue * 2)
            e.parentNode.style.backgroundColor = 'red';
        }
        if(number === 2 && props.potatoCount >= 1000){
            setUp2Bought(true)
            props.setPotatoCount(props.potatoCount - 1000)
            props.setClickValue(props.clickValue * 2)
            e.parentNode.style.backgroundColor = 'red';
        }
        if(number === 3 && props.potatoCount >= 5000){
            setUp3Bought(true)
            props.setPotatoCount(props.potatoCount - 5000)
            props.setClickValue(props.clickValue * 2)
            e.parentNode.style.backgroundColor = 'red';
        }
        if(number === 4 && props.potatoCount >= 10000){
            setUp4Bought(true)
            props.setPotatoCount(props.potatoCount - 10000)
            props.setClickValue(props.clickValue * 2)
            e.parentNode.style.backgroundColor = 'red';
        }
        if(number === 5 && props.potatoCount >= 15000){
            setUp5Bought(true)
            props.setPotatoCount(props.potatoCount - 15000)
            props.setClickValue(props.clickValue * 2)
            e.parentNode.style.backgroundColor = 'red';
        }
        if(number === 6 && props.potatoCount >= 20000){
            setUp6Bought(true)
            props.setPotatoCount(props.potatoCount - 20000)
            props.setClickValue(props.clickValue * 2)
            e.parentNode.style.backgroundColor = 'red';
        }
    }
    
    return ( 
        <div className="storePanel">
            <h1 className="store">Store</h1> 
            <div className="upgrades">
                <h1 className="title">Upgrades</h1>
                <div className="upgrade" onClick={up1Bought ? null : (e)=>buyUpgrade(1, e.target)} onMouseEnter={()=>showUpInfo(1)} onMouseLeave={()=>showUpInfo(1)}>
                    <img src={cursor} alt="" />
                    <div className={up1Hidden ? 'hidden' : ''}>
                        <h1>100</h1>
                        <h2>click x2</h2>
                    </div>
                </div>
                <div className="upgrade" onClick={up2Bought ? null : (e)=>buyUpgrade(2, e.target)} onMouseEnter={()=>showUpInfo(2)} onMouseLeave={()=>showUpInfo(2)}>
                    <img src={cursor} alt="" />
                    <div className={up2Hidden ? 'hidden' : ''}>
                        <h1>1000</h1>
                        <h2>click x2</h2>
                    </div>
                </div>
                <div className="upgrade" onClick={up3Bought ? null : (e)=>buyUpgrade(3, e.target)} onMouseEnter={()=>showUpInfo(3)} onMouseLeave={()=>showUpInfo(3)}>
                    <img src={cursor} alt="" />
                    <div className={up3Hidden ? 'hidden' : ''}>
                        <h1>5000</h1>
                        <h2>click x2</h2>
                    </div>
                </div>
                <div className="upgrade" onClick={up4Bought ? null : (e)=>buyUpgrade(4, e.target)} onMouseEnter={()=>showUpInfo(4)} onMouseLeave={()=>showUpInfo(4)}>
                    <img src={cursor} alt="" />
                    <div className={up4Hidden ? 'hidden' : ''}>
                        <h1>10000</h1>
                        <h2>click x2</h2>
                    </div>
                </div>
                <div className="upgrade" onClick={up5Bought ? null : (e)=>buyUpgrade(5, e.target)} onMouseEnter={()=>showUpInfo(5)} onMouseLeave={()=>showUpInfo(5)}>
                    <img src={cursor} alt="" />
                    <div className={up5Hidden ? 'hidden' : ''}>
                        <h1>15000</h1>
                        <h2>click x2</h2>
                    </div>
                </div>
                <div className="upgrade" onClick={up6Bought ? null : (e)=>buyUpgrade(6, e.target)} onMouseEnter={()=>showUpInfo(6)} onMouseLeave={()=>showUpInfo(6)}>
                    <img src={cursor} alt="" />
                    <div className={up6Hidden ? 'hidden' : ''}>
                        <h1>20000</h1>
                        <h2>click x2</h2>
                    </div>
                </div>
            </div>
            <div className="buildings">
                <h1 className="title">Buildings</h1>
                <div className="building 1" onClick={handleBuildings} onMouseEnter={()=>showBInfo(1)} onMouseLeave={()=>showBInfo(1)}>
                    <img src={potato} alt="" />
                    <h1 className="buildingName">b1</h1>
                    <h2 className="buildingPrice"> <img className='pricePotato' src={potato} alt="" />25</h2>
                    <h1 className="buildingAmount">{b1Count}</h1>
                    <div className={b1Hidden ? 'hidden' : ''}>
                        Increase auto-click value by 0.2
                    </div>
                </div>
                <div className="building 2" onClick={handleBuildings} onMouseEnter={()=>showBInfo(2)} onMouseLeave={()=>showBInfo(2)}>
                    <img src={potato} alt="" />
                    <h1 className="buildingName">b2</h1>
                    <h2 className="buildingPrice"> <img className='pricePotato' src={potato} alt="" />50</h2>
                    <h1 className="buildingAmount">{b2Count}</h1>
                     <div className={b2Hidden ? 'hidden' : ''}>
                        Increase auto-click value by 0.45
                    </div>
                </div>
                <div className="building 3" onClick={handleBuildings}
                onMouseEnter={()=>showBInfo(3)} onMouseLeave={()=>showBInfo(3)}>
                    <img src={potato} alt="" />
                    <h1 className="buildingName">b3</h1>
                    <h2 className="buildingPrice"> <img className='pricePotato' src={potato} alt="" />100</h2>
                    <h1 className="buildingAmount">{b3Count}</h1>
                     <div className={b3Hidden ? 'hidden' : ''}>
                        Increase auto-click value by 0.95
                    </div>
                </div>
                <div className="building 4" onClick={handleBuildings}
                onMouseEnter={()=>showBInfo(4)} onMouseLeave={()=>showBInfo(4)}>
                    <img src={potato} alt="" />
                    <h1 className="buildingName">b4</h1>
                    <h2 className="buildingPrice"> <img className='pricePotato' src={potato} alt="" />250</h2>
                    <h1 className="buildingAmount">{b4Count}</h1>
                     <div className={b4Hidden ? 'hidden' : ''}>
                        Increase auto-click value by 1.95
                    </div>
                </div>
                <div className="building 5" onClick={handleBuildings}
                onMouseEnter={()=>showBInfo(5)} onMouseLeave={()=>showBInfo(5)}>
                    <img src={potato} alt="" />
                    <h1 className="buildingName">b5</h1>
                    <h2 className="buildingPrice"> <img className='pricePotato' src={potato} alt="" />500</h2>
                    <h1 className="buildingAmount">{b5Count}</h1>
                     <div className={b5Hidden ? 'hidden' : ''}>
                        Increase auto-click value by 4
                    </div>
                </div>
                <div className="building 6" onClick={handleBuildings}
                onMouseEnter={()=>showBInfo(6)} onMouseLeave={()=>showBInfo(6)}>
                    <img src={potato} alt="" />
                    <h1 className="buildingName">b6</h1>
                    <h2 className="buildingPrice"> <img className='pricePotato' src={potato} alt="" />1000</h2>
                    <h1 className="buildingAmount">{b6Count}</h1>
                     <div className={b6Hidden ? 'hidden' : ''}>
                        Increase auto-click value by 8.2
                    </div>
                </div>
            </div>
           
        </div>
     );
}

export default StorePanel;