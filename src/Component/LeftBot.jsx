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





           
        </>
    )
}
