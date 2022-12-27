import React from 'react'
import First from '../componants/first/first'
import Second from '../componants/second/second'

import "./page.css"

function Page2() {
  return (
    <div className='page2'>
      <div className='div1'>
      <First/>
      </div>
      <div className='div2'>
      <Second/>
      </div>
    </div>
  )
}

export default Page2
