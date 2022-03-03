import React from 'react'
import { UilListUl } from '@iconscout/react-unicons'

export default function List() {
   

    const lists = [
        { text: "Crypto Winter's", totalpost: "1234" },
        { text: "Crypto Wars", totalpost: "1234" },
        { text: "Lionel Messi sells NFT'S", totalpost: "1234" },
        { text: "Rassons to use bitcion for transtion", totalpost: "1234" },
        { text: "Elon Musk it off Earth", totalpost: "1234" },
        { text: "Satoshi's Evolution", totalpost: "1234" },
        { text: "Reasons to  for transaction", totalpost: "1234" },
        { text: "Why can't bitcoin be deflated", totalpost: "1234" },
        { text: "Rassons to  for transtion", totalpost: "1234" },
        { text: "Why can't  deflated", totalpost: "1234" },
        { text: "How does 'Game of  in realtime", totalpost: "1234" },
        { text: "Crypto Winter's", totalpost: "1234" },
        { text: "Crypto Wars", totalpost: "1234" },
        { text: "Lionel Messi sells NFT'S", totalpost: "1234" },
        { text: "Rassons to  for transtion", totalpost: "1234" },
        { text: "Elon Musk has mad it off Earth", totalpost: "1234" },
        { text: "Satoshi's Evolution", totalpost: "1234" },
        { text: "Reasons  for transaction", totalpost: "1234" },
        { text: "Why can't  deflated", totalpost: "1234" },
        { text: "Rassons to usetranstion", totalpost: "1234" },
        { text: "Why can't bitcoin be deflated", totalpost: "1234" },
        { text: "How does 'Game of in realtime", totalpost: "1234" },
        { text: "Crypto Winter's", totalpost: "1234" },
        { text: "Crypto Wars", totalpost: "1234" },
        { text: "Lionel Messi sells NFT'S", totalpost: "1234" },
        { text: "Rassons to use bitcion for transtion", totalpost: "1234" },
        { text: "Elon Musk has mad it off Earth", totalpost: "1234" },
        { text: "Satoshi's Evolution", totalpost: "1234" },
        { text: "Reasons to use bitcoin for transaction", totalpost: "1234" },
        { text: "Why can't bitcoin be deflated", totalpost: "1234" },
        { text: "Rassons to for transtion", totalpost: "1234" },
        { text: "Why can't bitcoin be deflated", totalpost: "1234" },
        { text: "How does 'Game of thrones' Realted to bitcoin in realtime", totalpost: "1234" },
        { text: "Crypto Winter's", totalpost: "1234" },
        { text: "Crypto Wars", totalpost: "1234" },
        { text: "Lionel Messi sells NFT'S", totalpost: "1234" },
        { text: "Rassons to usefor transtion", totalpost: "1234" },
        { text: "Rassons to for transtion", totalpost: "1234" },
        { text: "Why can't bitcoin be deflated", totalpost: "1234" },
        { text: "How does 'Game of thrones' Realted to bitcoin in realtime", totalpost: "1234" },
        { text: "Crypto Winter's", totalpost: "1234" },
        { text: "Crypto Wars", totalpost: "1234" },
        { text: "Lionel Messi sells NFT'S", totalpost: "1234" },
        { text: "Rassons to usefor transtion", totalpost: "1234" }, { text: "Rassons to for transtion", totalpost: "1234" },
        { text: "Why can't bitcoin be deflated", totalpost: "1234" },
        { text: "How does 'Game of thrones' Realted to bitcoin in realtime", totalpost: "1234" },
        { text: "Crypto Winter's", totalpost: "1234" },
       
       
       

    ];




    return (
        <>

            <div className="flex flex-col items-center space-y-0.5 bg-green-200 rounded-tl-2xl rounded-tr-2xl">
                <div className="item w-full  bg-blue-800  rounded-tl-2xl rounded-tr-2xl ">
                    <div className='bg-blue-800 rounded-xl h-[80px] flex   space-x-24'>
                        <div className='text-white font-weight[900px] text-1xl mt-5 pl-10'> <b>  Recent Topics </b> </div>
                        <div className='flex border-2 border-white h-9 w-12 mt-5 text-white rounded-lg '> Top < UilListUl className=" " fill=" white" />  </div>
                    </div>

                </div>
                <div className=" flex justify-between   bg-gray-100 w-full flex-col  ">
                    {lists.map((item)=>{
                        return <div className='flex  space-x-6 h-12 items-center  rounded-full  hover:bg-blue-200 '> 
                        <div className='pl-2 text-base  font-semibold'>   {item.text}</div>
                        <div className='bg-white rounded-lg h-5 font-semibold mr-10'> { item.totalpost}K </div>
                        
                         </div>
                        
    
                    })} 

 

                







                </div>
            </div>





        </>
    )
}
