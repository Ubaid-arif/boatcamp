import { UilBitcoin } from '@iconscout/react-unicons'
export default function Footer() {
    return (
        <>
        <hr/>
        <hr/>
            <div className=" flex  justify-around items-center bg-blue-800 text-white semibold ">
                <div className='flex '>
                    <UilBitcoin fill="white" className="h-10 w-10" />
                    <div className='text-2xl font-semibold'> My2cents </div>
                </div>

                <div> Advertisemrnt  </div>
                <div> yourMoney </div>
                <div> Bonuses </div>
                <div> FAQ </div>
                <div> Privacy policy </div>
                <div> Impirt </div>
                <div> Terms and Conditions </div>
               

            </div>

        </>
    )
}