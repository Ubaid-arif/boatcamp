import React from 'react'
import LeftBot from './LeftBot'
import ring from "../image/ring.PNG"

export default function Slider() {
    return (
        <>

            {/* flex flex-col ...  justify-center items-center  */}


            <div className='bg-white h-[full] w-[full] '>

                <div className='bg-blue-900 h-[310px] w-[full] flex flex-col ...  justify-center items-center  '>
                

                    <div className='flex-col justify-center'  >
                        
                        <div className='mt-[-80px]'> <img className="  align-center  mt-[-28px]  rounded-full" src={ring} alt="ring" />   </div>     

                    <div className="text-center text-white  font-bold  ">my2cents</div>
                    </div>
                    <br />

                    <div className='bg-white   w-[85%]  h-[350px]     rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-2xl '>
                        <img className="  align-center h-[10] w-[10]  rounded-tl-2xl rounded-tr-2xl  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXZ250l7amFFsJ7Q8hythUgFGcuLhMOEfCw&usqp=CAU"
                            alt="bitcoin" />
                        <div className='flex justify-center'>
                            <img className=" h-12 w-12 mt-[-28px] rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgaGhwcGBgaGBweGBwaGhgaGBgeIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrJCE0NDQxNDQ0NDQ0NDE0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0Mf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgUBAwQGBwj/xAA+EAABAwIDBQYEAwYFBQAAAAABAAIRAyEEEjEFQVFhgQYicZGh8BMysdFCweEzUmJygvEHFHOS4hU0Q6LC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEAAwEAAwEBAAAAAAAAAQIREiExAzJBcWFR/9oADAMBAAIRAxEAPwD4ystWFlqs+iSIi0giIgIiICIChKDMpCwptlBGCptMahdNASRItxhWjNntc0ubcSGn+o2JHP8AOOEy0cmAZntPvrZehr1XUmZHBkXLXCTeRaNxMzHPSbqjo4d1KoL
                         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"
                                alt="icon" />
                        </div>


                        <div className="text-center text-blue-700  font-bold text-lg  ">Professor</div>
                        <div className="text-center text-blue-600 text-xs font-bold mb-4 ">Istanbul , Turkey</div>

                        <hr />

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
                            <div className='flex justify-around mt-4' >

                                <div className='flex'>
                                    <div className='text-blue-900 font-bold text-xs'>2k   </div>
                                    <div className='text-blue-500  font-bold text-xs'>Ideas  </div>
                                </div>
                                <div className='flex'>
                                    <div className='text-blue-900 font-bold text-xs'>126 </div>
                                    <div className='text-blue-500  font-bold text-xs'>Introduction  </div>
                                </div>
                                <div className='flex'>
                                    <div className='text-blue-900 font-bold text-xs'>652  </div>
                                    <div className='text-blue-500  font-bold text-xs'>prodcast </div>
                                </div>
                                <br /> <br />
                            </div>




                        </div>

                    </div>





                </div>







            </div >
            <br /> <br /> <br />


            <LeftBot />
        </>


    )
}
