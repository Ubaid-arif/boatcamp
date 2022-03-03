import React from 'react'
import { UilStore, UilCarSideview, UilBuilding, UilSearch, UilAngleDown } from '@iconscout/react-unicons'

export default function headerOlx() {
    return (
        <>

            <div class="flex flex-col items-center bg-gray-100 ">
                <div class="item w-full   flex   items-center" >
                    <div className="  "> <img className='h-10 ml-6 rounded-lg' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAYFBMVEVKr/3///84qv253P5ArP2n0/43qf3s9f9MsP35/P8vp/3I4/7E4f72+v9vvP1quv3l8f+z2f6g0P52v/2Lx/7m8v9+wv3X6/7x9/+Zzf5Xs/3f7v+Fxf2Syv7Q5/6s1v7HlLibAAAHkklEQVR4nO3d65aqIBgGYGDIjM42Uzs73f9dbq0sRcGPk4ry/ttrmYPPFkRERHiw+aEIFNJNcVA3f0YnQQqaIAVNkIImSEETpKAJUtAEKWiCFDRBCpogBU2QgiZIQROkoBmR1G65P183KUIsihhC8eZ4e6wua1tFG4fUaX9NGSGUVo4m+ychETo+7ja4/Je6PDa5kbjomRdLk5Np0TyXOt0QAR0BJdF1aVQ0n6X+EiDTB+vX4MzyV2q5ZQpMBVa81y2ar1J7RFSZ3lhR8k+raH5KzVRqXc2K3XSsfJT6kV3pYFaJetH8k7qnmvWuYkV/VIvmm9T6GJk7PQ8ovagVzTOpvUkDxYWdlYrmldR6Y6HifUNjldPKJ6m7aUteC5vBi+aR1JlZdsoPa7OAFs0bqcXWas0rQtEfsGi+SM1j2zWvSAS8cfZE6mSpb9AUBrsV9ENq5RAqO6tA3QUvpFYO2vLKwd0ARfNByjVUdnTH9qJ5IOUeKju839aiDV+qC6js+FrbqsFLubzqlRM9Woo2dKm5k/5mU9hKXrSBSy1itzzlRDtp0QYutXXVM28Kld4DDlsq6azu5aFbWdG0pdbJTBi5huyXVal7J5e90kHKhte1peaMikI2MqhFLPwhpRWpRZdV7xkmeXKqLyW5elMJ1UI+KFDe9NC5FJKMjzmRklC1QJVL6va2uDlU3Fd3IyWkaoMqSa07bc2LiOufIykBVStUSerYQ92rlqAbqUaqdqhvOU8dX/eKUNGV25lUAxUA6iuVwsplP0wwgc+dVI0KAvWR+umllcojatQdSnFUIKiPFKxUTsKan9a4lKpQwaAKqX1PzXke2jwA6lSqRAWEKqR6hBKdVG6lPlRQqLdUf61UHnrtQepNBYZ6S3U4KtUU1jRnz7XUkwoO9ZK693pKZWVuGlNwLpVRKUC9pPq4Na6E9iKFlGb55rv+11P3/BvSMKbehZRK8l3P+j6lEGq4FRuiVM/teZ6GNn2AUpcexqX40Pr8lwFKnU0qHyURS7OQyGzubP3hwwCl9EcRKInP9/mrfOv7LI30serVb3hSf7o7puzKDVjOE22r+sz+4Unp3hxHx3mtxuBFotnjqN/RDE9Kr9tJ6b3u9CxnqidfO+DhSWndydCt+En5TWuPhJ/VPzipnc5x0YPQKctMp6i1hkpbytEtB7hA5QjG3oyoaoPE+jM4HMyVi3YI39Sl5DMv8uh00VJrUvapogtGeKv+O9q+HILGXhnX8pnMCrJMlUFlUur7hLyk8E+9/vFNutH8KatUORRGGocknVlT5KH+Hjw38mI208wi1RMKo5PypU/w0ImPuhT3MNlwTp41qhcURivVI5J3EL5RPqn4i5/p7EVLVG8ojJQPiAj65nzWytWaq9XG8zytUBVQGCXKUjAojbskrptgPiPWAtUHCqNfxeNpfjbXFOUuLdX7veS/zpjqC4XRUfG38HUP/lSvFZF1KVOqEhRGql3E2o2sOKoNlQMpM6oyFEYb1V/DlytTHUvldm1n5r4BVQVK/ZxiYCh8UNw1qXbULL3joE1VhVKfNuWdFF7pTSWg3Fs9yjvwT0rziQp/zzb+2rfWfO7LDy2NvkXXhapRjb2XoA/FU42852kCxVGN+27GDKpKNeo7ZFOoCtWYR13MocpUIx7JswFVohrv6LAdqC/VaJ842IL6UDl7iqW+W6tPsexBFVQDejLKdaeMpGxCvanG+bTdLtTrgEc5g8M21JNKd1aQlKrnWUELjb/eWrpDmGkGTpi9CI3BjNhD04zYs2YxfZgRG2ZZw4JNXpuhBJ2Xlmbu1/poA5RSHngphxLC4jRNoym8DdLVGoKy+PGGUXhrDZR81+FNSEjyXQ/g7dqG4YkhSk33jW2V437ue6KrAGTXEYXT77XzSa4sgcgOL+ENz7tUE1ytJIfCClTvvUM3d5JeVsB5QSlQFcXq8aTqZVWlAgpOVewetrWTRD2s1PWFAlN9yjWp1d/KUFCqz+ZTWlGwCgWk+mzd2yqVorX3HUoRfmV2CNV362s/HfVYAOVQqgYFovpuPJXVdJugIFSljaexQnMzFICqvPEUVv0WQbVTlbedwEryYqhWqsq2o/86AZVA5VTQrxOM/4sXifzDLXfxBy9mfDsRvqIiSvgyDzR9fu2pZWrf0KXCF8QECV+lgyZ86RCa8PVMaMIXWaEJX/mFJnw5Gpo+vkYOfJnLF6nwhXsukvEhfHbQrss/NViJR1L4bjYhsSGsrWNeik9SeLGxWgNpLL8nrsYrqXypD3unFQN1Dj7xTAqvj5b6CyRVOaGwf1JZa5VaqIIUvs5CEf+k8jIbVkEayQbMhX/VPymMHybNFWW3pjl3bfFTCuO90vd+yk5RAl80pxxfpTBebpn6++okVm6fivgrhfFfglRqISXkV/Lksy0+S2U53YBYGdMVsFqAJJ5LZbk8NoTIroaUErZNDM6mV/yXynPZX1OWe1WOJn+aTRg6Pu7SR57AjEPqmd1yn1w3aVZWFrEYpZvj7bG62EB6ZkRSjhOkoAlS0AQpaIIUNEEKmiAFTZCCJkhBE6SgCVLQBCloghQ0QQqaIAXNwKT+Ayaml4NFQFdqAAAAAElFTkSuQmCC' /> </div>
                    <div className=" flex ml-10"> <UilStore /> <div className="font-bold"> MALLS </div></div>
                    <div className=" flex ml-10 "> <div> <UilCarSideview /> </div > <div className="font-bold">MOTORS</div>  </div>
                    <div className=" flex ml-10"> <UilBuilding />  <div className='font-bold'> Property</div></div>



                </div>

                <div class="item w-full   items-center flex  ">


                    <div className="max-w-md mx-auto">
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Pakistan" />
                            <div> <UilAngleDown /> </div>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto w-full  ">
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">

                            </div>
                            <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Find car mobile Phone and more..." />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>


                   <div className="max-w-md mx-auto w-full flex justify-end space-x-20 text-3xl">
                        <div className="font-bold s"> 
                        Login
                        </div> 
                        <div className=" border-rose-600 border-4 font-semibold rounded-2xl w-[90px] bg-white"> 
                        +Sell
                        </div> 
                    </div>
                    


                </div>
                <hr/>
                <hr/>
                <hr/>
                <hr/>

            </div>







        </>
    )
}

