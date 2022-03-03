import React from 'react'
import LeftBot from './LeftBot'
import ring from "../image/ring.PNG"

export default function Slider() {
    return (
        <div>
            <div className=' h-[full] w-[full]  '>
                <div className='bg-blue-900  h-[310px] w-[full]  '>  <br />  <br />  <br />
                    <div className=' flex justify-center '>
                        <div> <img className=" rounded-full " src={ring} alt="ring" /> </div>
                    </div>
                    <div className=" text-white text-center font-bold  ">my2cents</div>  <br />
                    {/* <div className=' '> */}
                    <div className='bg-white w-[85%]  h-[350px] ml-5 content-center rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-2xl '>
                        <img className="  align-center h-[10] w-[100%]  rounded-tl-2xl rounded-tr-2xl  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXZ250l7amFFsJ7Q8hythUgFGcuLhMOEfCw&usqp=CAU" alt="bitcoin" />
                        <div className='flex justify-center'>
                            <img className=" h-20 w-20 mt-[-28px] rounded-full" src="" alt="icon" /> </div>
                        <div className="text-center text-blue-700  font-bold text-lg  ">Professor</div>
                        <div className="text-center text-blue-600 text-xs font-bold mb-4 ">Istanbul , Turkey</div>
                        
                  {/* text wala   kam */}
                  <div className='mt-4'>
                  <div className='flex justify-around' >

                      <div className='flex'>
                          <div className='text-blue-900 font-bold text-xs'>5k   </div>
                          <div className='text-blue-500  font-bold text-xs'>Post   </div>
                      </div>
                      <div className='flex'>
                          <div className='text-blue-900 font-bold text-xs'>500   </div>
                          <div className='text-blue-500  font-bold text-xs'>Video  </div>
                      </div>
                      <div className='flex'>
                          <div className='text-blue-900 font-bold text-xs'>40 </div>
                          <div className='text-blue-500  font-bold text-xs'>Books </div>
                      </div>
                  </div>

                 
              </div>
              {/* text wala kam khatam */}
                    {/* </div> */}

                  

                </div>
            </div>
        </div >
        
       
        </div>


    )
}










