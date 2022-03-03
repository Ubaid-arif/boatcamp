import React from 'react'

import { UilUserCircle, UilEye, UilSmile, UilBookmark, UilMeh, UilMessage, UilEllipsisH } from '@iconscout/react-unicons'

export default function Post() {
    const name = "Craig Cooper";
    const logo = "https://i.zoomtventertainment.com/story/pjimage_86_10.jpg?tr=w-1200,h-900"
    const current = new Date();
    const date = `${current.toLocaleDateString()} ${current.toLocaleTimeString()}`;
    const topic = "# flutter sdk  flutter sdk  flutter sdk  flutter sdk  flutter sdk  "
    const text = " The first version of Flutter was known as Sky and ran on the Android operating system. It was unveiled at the 2015 Dart developer summit[6] with the stated intent of being able to render consistently at 120 frames per second.[7] During the keynote of Google Developer Days in Shanghai in September 2018, Google announced Flutter Release Preview 2, the last major release before Flutter 1.0. On December 4th of that year, Flutter 1.0 was released at the Flutter Live event, denoting the first stable version of the framework. On December 11, 2019, Flutter 1.12 was released at the Flutter Interactive event.[8]"

    return (
        <>
            <div className='bg-gray-300  h-500px'>  </div>

            <div className="flex flex-col space-y-0.5 bg-gray h-300 w-300 ">
                <div className="item flex flex-row w-full ">
                    <div className=" w-[70%] space-x-2 flex" > <div className=''> <img className='rounded-full h-[25px]  w-[25px]' src={logo} /> </div> <div className='text-blue-800 font-bold'>{name} </div> </div>
                    <div className="bg-gray-100 rounded-2xl px-1">
                        <p className="text-[12px] text-blue-600 font-[600]">{date}</p>
                    </div>

                </div>
                {/* text wala  */}

                <div className="text-[12px] font-[600] text-blue-400 ml-8 mt-[3px]">
                    <p>{topic}</p>
                </div>
                <div className="w-[85%] text-medium my-5 pl-2 ">
                    <p className=""> {text} </p>
                </div>
                {/* icons */}

                <div className="flex w-[85%] my-5 justify-between">
                    <div className="flex justify-between">
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilEye className="h-7 w-8 fill-blue-700" />
                            <div className="mr-1 text-blue-500"> 13.5k</div>

                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilSmile className="h-7 w-8 fill-blue-700" />
                            <div className="mr-1 text-blue-500"> 3.2k</div>

                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilMeh className="h-7 w-8 fill-blue-700" />
                            <div className="mr-1 text-blue-500"> 300k</div>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilBookmark className="h-7 w-8 fill-blue-700" />
                            <div className="mr-1 text-blue-500"> 1.5k</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ml-2'> <UilMessage className="h-7 w-8 fill-blue-700" /> </div>
                        <div className='ml-2'> < UilEllipsisH className="h-7 w-8 fill-blue-700" /> </div>
                    </div>

                </div>

              
            </div>
            
        </>
    )
}

