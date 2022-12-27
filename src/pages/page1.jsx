import React from 'react'
import Firsthalf from '../componants/firsthalf/firsthalf'
import Otherhalf from '../componants/otherhalf/otherhalf'
import "./page.css"

function Page1() {
  return (
    <div className='page1'>
      <div className='div1'>
      <Firsthalf/>
      </div>
      {/* <div className='div2'>
      <Otherhalf/>
      </div> */}
    </div>
  )
}

export default Page1
