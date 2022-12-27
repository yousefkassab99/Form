import React from 'react'
import dot from "../../assets/icons/dot.png"
import c from "../../assets/icons/c.png"
import "./firsthalf.css"

function Firsthalf() {
  return (
    <div className='container'>
      <div>
        <div className='logo'>
            <span ><svg className='logo1' width="56" height="56" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#0084ff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff" stroke-width="0.4"></path> </svg></span>  <span className='logo2'></span>
            <span ><svg className='logo2' width="56" height="56" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#0084ff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff" stroke-width="0.4"></path> </svg></span>  <span className='logo2'></span>
        <div className='textlogo'>Gamers</div>
        </div>
          
          <div className='dot'>
          <span><img src={dot} className="doticon"/></span>
          </div>
          
        <div className='pa'>
        <span><img src={c} className="cicon"/></span>
            <p className='paragragh'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
            <h1 className='h'>Hideo Kojima</h1>
        </div>
        <div className='rk'></div>
      </div>
    </div>
  )
}

export default Firsthalf
