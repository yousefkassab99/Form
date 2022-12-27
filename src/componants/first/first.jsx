import React from 'react'
import mach from "../../assets/images/mach.png"
import coma from "../../assets/icons/coma.png"

import "./first.css"

function First() {
  return (
    <div className='container'>
      <div>
        <div className='logo'>
        <svg className='logo1' width="106" height="106" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#0008ff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="blue"></path> </svg>      
        <svg className='logo2' width="106" height="106" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#0008ff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="blue"></path> </svg>   
        <div className='textlogo'>Gamers</div>     
        </div>
          
        
          
        <div className='pa'>
        <span><img src={coma} className="cicon"/></span>
            <p className='paragragh'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
            <h1 className='h'>Hideo Kojima</h1>
        </div>
         <span><img src={mach} className="cc"/></span>
      </div>
    </div>
  )
}

export default First
