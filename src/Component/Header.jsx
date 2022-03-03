import React from 'react'
import { UilSearch } from '@iconscout/react-unicons';
import ring from "../image/ring.PNG"

export default function Header() {
    const placeholder = "Search topic, book, video, idea, talent, podcast";
    return (
        <>
            <div className="flex">
                <div className="flex-none w-[70%] h-14 bg-white">
                    <div class=" flex  mb-2 mt-1.5 xl:w-95  border-2 border-sky-300 rounded-3xl px-1.5 py-1.5 ">
                        <div className='px-3 py-1.5'> <UilSearch fill="blue" /> </div>
                        <input placeholder={placeholder} className=" text-blue-900 w-[85%] px-3 py-1.5  placeholder:text-blue-500 placeholder:font-xl placeholder:text-[0.98rem] pl-2 outline-none" />
                        <div className='px-3 py-1.5'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[1.6rem]" fill="none" viewBox="0 0 24 24" stroke="blue">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                    </div>
                </div>
                {/* icons */}
                <div className=" flex justify-around flex-initial w-[30%] ... bg-white">
                    <div >
                        <div className="relative left-[19px] mt-2 top-[5px] h-2 w-2 border-white rounded-full bg-red-500"> </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <div className=' '>
                        <div className=' relative left-[19px] mt-2 h-2 w-2  bg-red-500 rounded-full' > </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /> </svg>
                    </div>
                    <div>
               
                        <div className="w-[5.3rem] h-[2.7rem]  mt-2 flex items-center justify-center rounded-3xl border-[1px] border-blue-300 bg-blue-50">
                            <img src={ring} alt="" className=" rounded-full h-8 w-8" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[1.3rem] ml-2 text-semibold stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

<hr/>

            </div>
        </>
    )
}
