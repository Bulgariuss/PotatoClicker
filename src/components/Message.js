import React from 'react';
import '../styles/Message.css'

function Message(){
    const toggleMessage = ()=>{
        document.querySelector('div.message').classList.toggle('on')
        document.querySelector('div.arrow').classList.toggle('on')
    }
    return(
        <div>
            <div className="message on">
                <div class="arrow on" onClick={toggleMessage}>
                    <i class="fas fa-arrow-up"></i>
                </div>
                <p className="text">Hi! :) This website was created only for portfolio purposes to show some of my abilities to use React! It's a semi-copy of <a className='cookieLink' target="_blank" href="https://orteil.dashnet.org/cookieclicker/">cookie clicker</a> and if it was meant to be used/played it would be differently styled, had more thoughtful values and names. <br /> <br /> Oh and also you can turn on/off music in options panel :)</p>
            </div>
        </div>
    )
}

export default Message