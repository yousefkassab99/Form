import React from 'react'
import mach from "../../assets/images/mach.png"
import coma from "../../assets/icons/coma.png"
import logo from "../../assets/images/logo.png"

import "./first.css"

function First() {
  return (
    <div className='container'>
      <div>

        <div className='logo'>
                 <img src={logo} alt="logos" />
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
