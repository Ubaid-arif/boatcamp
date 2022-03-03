import React from 'react'
import banar from "../image/banar.PNG"
import banar2 from "../image/banar2.PNG"
import { UilAirplay,UilEstate,UilBookOpen ,UilPlayCircle ,UilLightbulbAlt ,UilBag,UilMicrophone ,UilSync,UilTrees ,UilBitcoinCircle    } from '@iconscout/react-unicons'
export default function LeftBot() {
    return (
        <>




            <div className="flex flex-col space-y-1 container items-center  ">
                <br />
               
                <div className=" font-bold item bg-blue-200 w-[85%] h-10 rounded-lg items-center  flex  hover:bg-blue-600 "> 
                <UilEstate fill="blue"/> <div className='pl-2'>Home</div> </div>

                <div className="item  bg-blue-200 font-bold  w-[85%] h-10 rounded-lg items-center flex hover:bg-blue-600"> 
                   <UilBookOpen fill="blue"  />
                 <div className='pl-2'>myBooK</div> </div>

                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg  items-center flex hover:bg-blue-600" >
                    <UilPlayCircle  fill="blue"/>
                 <div className='pl-2'>myVid</div> </div>

                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg  items-center flex hover:bg-blue-600" >
                   <UilLightbulbAlt fill="blue" />
                <div className='pl-2'>myIdea</div>   </div>


                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg items-center flex hover:bg-blue-600">
                    <UilBag fill="blue" />
                 <div className='pl-2'>myJob</div>  </div>

                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg items-center flex hover:bg-blue-600">
                <UilMicrophone fill="blue" />   

                 <div className='pl-2'>    myPodcast</div>   </div>
               

                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg items-center flex hover:bg-blue-600" >
                <UilSync fill="blue" />           <div className='pl-2'>myReuse</div>  </div>

                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg  items-center flex hover:bg-blue-600">
<UilTrees fill="blue" />
                <div className='pl-2'> mySlowfood</div> </div>

                <div className="item bg-blue-200 font-bold w-[85%] h-10 rounded-lg items-center flex hover:bg-blue-600 ">
                   <UilBitcoinCircle fill="blue" />
                <div className='pl-2'> myCM</div>   </div>

            </div>


            {/* toggle Button */}


            <div className='flex' >
                {/* <div> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>  
                </div> */}




            


                {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </div> */}
            </div>




            <div className='flex-col'>
                <div> <img src={banar} /> </div>
                <br />
                <div><img src={banar2} /> </div>
            </div>
        </>
    )
}
