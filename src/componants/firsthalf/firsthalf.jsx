import React from 'react'
import dot from "../../assets/icons/dot.png"
import c from "../../assets/icons/c.png"
import logo from "../../assets/images/logo.png"
import img from "../../assets/images/edge.png"
import "./firsthalf.css"

function Firsthalf() {
  return (
    
  

    <div className='container'>
      <div className="leftSide">
        <div className='logo'>
        <img src={logo} alt="logos" />
        
        </div>
          
          <div className='dot'>
          {/* <span><img src={dot} className="rk"/></span> */}
          </div>
          
        <div className='pa'>
        <span><img src={c} className="cicon"/></span>
            <p className='paragragh'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
            <h1 className='h'>Hideo Kojima</h1>
        </div>
        <div className="img-edge"><img src={img} alt="img"/></div>
      </div>
    </div>
   
  )
}

export default Firsthalf
