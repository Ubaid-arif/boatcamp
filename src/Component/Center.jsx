import React from 'react'
import banar4 from "../image/banar4.PNG"
import Post from './Post'
import  Next  from "./Next"
import Create from './Create'
import { UilFolder, UilFilter } from '@iconscout/react-unicons'

export default function Center() {
    return (
        <>
  



            <div className='flex flex-col justify-center items-center space-y-2 w-full'>
                {/* banar+heading */}
                <div className='upper-wala-div'>
                    <div className="flex flex-col justify-center items-center h-[600px]  ">
                        <hr />
                        <div className="item w-[95%] h-[60%]   "> <img className=' h-[full] w-[100%] rounded-xl' src={banar4} /> </div>
                        <div className="item w-[95%] h-[30%] rounded-xl  flex flex-col  justify-center bg-blue-800 pr-20 space-y-5">
                            <div className='flex  space-x-4 '>  <div className=''> <UilFolder fill="white" className="h-10 w-10" /> </div> <div className='text-white text-4xl'> <h1> <b> Crypto Winter's </b></h1> </div> </div>
                            <div className='flex mb-2'> <div className='text-white  '> #Bitcoin</div> <div className='bg-white text-blue-800 rounded-xl h-7 ml-3'><b>1253 Post</b> </div></div>
                        </div>
                            <div className="item w-[95%] h-[10%] mt-5 bg-white rounded-xl flex flex-row justify-center ">
                            <div className='basis-1/2 text-3xl text-blue-800 flex items-center '><b>Post</b> </div>
                            <div className='basis-1/2  flex justify-center items-center '>
                                <div className='rounded-xl flex items-center justify-center bg-blue-800 w-[70%] h-9 '>
                                    <div className='text-3xl  text-white '> Latest  </div>
                                    <div className=''> <UilFilter className="h-7 w-7" fill="white" />  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* post start */}
                <div className='w-[100%]'> <Post /> </div> <hr/>
                <div className='w-[100%]'> <Post /> </div> <hr/>
                <div className='w-[100%]'> <Post /> </div> <hr/>
                <div className='w-[100%]'> <Post /> </div> <hr/>
                <Next />
                <Create/>





            </div>
        </>
    )
}
