import React from 'react'
import { UilFileInfoAlt, UilBold, UilItalic, UilAlignCenter, UilArrowLeft, UilArrowRight } from '@iconscout/react-unicons'
import Banar3 from "../image/banar3.PNG"
import { useState } from 'react'


export default function Create() {

   
    const text = " The first version of Flutter was known as Sky and ran on the Android operating system. It was unveiled at the 2015 Dart developer summit"
const [data,setdata]=useState("")
const clickAdd = ()=>{
    Addpost(data)
}
    
    return (
        <>
            <div className=' w-[90%] flex items-center justify-center flex-col space-y-7'>

                <div className='rounded-xl flex items-center justify-center bg-blue-800 w-[90%] h-[80px] '>
                    <div className='  flex items-center justify-center text-blue-800 bg-white rounded-xl font-bold w-[90%] '> <div className=''> <UilFileInfoAlt />  </div> Mointize a topic  </div>
                </div>

                <div className='rounded-xl flex items-center justify-center bg-blue-100 w-[90%] h-[40px] '>
                    <div className='text-2xl text-blue-500  rounded-xl font-bold w-[90%] '> Create a Post</div>
                </div>

                <div className='bg-white flex flex-col w-[90%] rounded-xl h-[90px]  border-blue-600'>
                    <div className='bg-blue-800 w-[100%] flex rounded-xl '>
                        <UilBold fill="white" />
                        <UilItalic fill="white" />
                        <UilAlignCenter fill="white" />
                        <UilArrowLeft fill="white" />
                        <UilArrowRight fill="white" />
                    </div>
                    <div className=" text-medium my-5 pl-3 pr-3  pb-3 ">
                    <input onChange={(e)=>{setdata(e.target.value)}}  placeholder={text} className=" text-blue-500 w-[85%] px-3 py-1.5  placeholder:text-blue-500 placeholder:font-xl placeholder:text-[0.98rem] pl-2 outline-none" />
                    </div>
                </div>
                 

                <div className='flex w-full'>
                    <div className='flex flex-col '>

                        <div>
                            {/* radio button  */}

                            <div className="flex flex-col justify-center ">
                                <div className='text-base	pl-4'> store on chain? </div>
                                <div className='flex space-x-4'>
                                    <div className="form-check flex   ">
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                            sure
                                        </label>
                                    </div>
                                    <div className="form-check flex">
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault2">
                                            Nope
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex items-center justify-center h-[50px] w-[80%] ' >  
                     <button onClick={clickAdd} className=' text-xl   flex items-center justify-center text-white bg-blue-800 rounded-xl font-bold h-full w-full '>  Post </button>
                    </div>

                   

                </div>

                <div> <img src={Banar3} alt='last baner' className='h-[250px] w-full rounded-lg'/></div>
            </div>
        </>
    )
}
