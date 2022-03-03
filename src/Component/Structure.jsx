import React from 'react'
import LeftBot from './LeftBot'
import Slider from './Slider'
import Test from "./test"
import Header from './Header'
import Center from './Center'
import Right from './right/Right'
import Footer from "./Footer"


export default function Structure() {
  return (
    <>



      <div className="flex ">
        <div className="item flex  flex-col w-[30%]   bg-white  "  >
          <div className='w-[full]  ' > <Test />  </div>

        </div>

        <div className="item w-full h-50 bg-green-200 " >
          <div className='bg-white '> <Header /> <br /> <hr />  </div>
          <div className=' flex' >
            <div className='bg-gray-100 w-[70%]' > <Center /> </div>
            <div className='bg-white w-[30%]'  > <Right/></div>
          </div>
        </div>
      
      </div>

      <div className='w-[full]  '> <Footer/> </div>














































    </>

  )
}
