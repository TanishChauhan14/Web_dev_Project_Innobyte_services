import React from 'react'
import Headroom from '../Components/Rooms/Headroom'
import Room from '../Components/Rooms/Room'

function Page5() {
  return (
    <div className='h-screen  w-[1516px] flex-col  md:justify-around flex' id='Page5'>
        <Headroom />
        <Room />
    </div>
  )
}

export default Page5