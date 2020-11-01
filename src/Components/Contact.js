import React from 'react';
import './Components.css'

const avatar = 'https://randomuser.me/api/portraits/lego/6.jpg'

function Contact(){
    return (
        <div  className="Contact">

            <img className="avatar" alt="BOUZBOUZ" src={avatar}/>
           
            <div className="name"> BOUZBOUZ LOZ
            <div className="status">
                <div className="status-online"></div>
                <p className="status-text">Online</p>
            </div>
            </div>
        </div>
    );
}

export default Contact;