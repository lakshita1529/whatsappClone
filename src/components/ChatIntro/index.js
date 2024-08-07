import React from 'react';
import './ChatIntro.css';

export default function ChatIntro(){
  return (
    <div className="chatIntro">
      <div className="chatIntro--top"></div>
      <div className="chatIntro--main">
        <img src="./intro-wpp.jpg" alt=""/>
        <h1>Keep your cell phone connected</h1>
        <h2>WhatsApp connects to your phone to tune in to your messages. To reduce data usage, connect your phone to a Wi-Fi network.</h2>
      </div>
    </div>
  );
}