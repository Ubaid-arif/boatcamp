import React from 'react'
import { UilAngleDown,UilCheckCircle   } from '@iconscout/react-unicons'
import List from './List'

export default function () {
    return (
        <>
            <div classname="flex flex-col space-y-1 ">
                <div classname="item w-full h-30 bg-gray-700 space-y-2" >
                    <div className='bg-blue-800 rounded-xl h-[80px] flex   space-x-24'>
                        <div className='text-white font-weight[900px] text-2xl mt-4 pl-10'> <b>  Category</b> </div>
                        <div> <  UilAngleDown className="h-12 w-12 mt-3" fill=" white" /> </div>
                    </div>

                    <div className='flex justify-around items-center space-y-2 '>
                        <div className='bg-blue-800 rounded-xl text-white pl-1 font-semibold '> Bitcoin </div>
                        <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold '> Crypto </div>
                        <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold '> Blockchain </div>
                        <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold '> Market </div>

                    </div>

                    <div className='flex justify-around items-center space-y-2 '>
                       <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold'> Politic </div>
                        <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold'> Staking </div>
                        <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold'> Dex </div>
                        <div className='bg-gray-200 rounded-xl text-blue-800 pl-1 font-semibold'> Ecosytem </div>

                    </div>
                    
                    <div className='flex  items-center space-y-2'> 
                    <div className= ' ml-3 bg-blue-800 rounded-lg'> <UilCheckCircle  fill="white"/> </div> 
                    <div className='ml-3 text-blue-800 font-semibold underline-offset-8	'> Select all Categroy </div>
                    </div>
                </div>
                <hr/>
                <div className="item w-full h-auto"><List/></div>
            </div>

        </>
    )
}
