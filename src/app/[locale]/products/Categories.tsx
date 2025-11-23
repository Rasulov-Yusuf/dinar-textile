import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Categories() {
    return (
        <div className='container  mx-auto'>
            <h1 className=' fon font-semibold font-archivo text-center py-6 md:text-left md:align-baseline'>Kategoriyalar</h1>
            <div className='flex items-center gap-3 justify-center  flex-wrap'>
                <div className="w-full min-h-[380px] relative  rounded-2xl  bg-[url('/icons/ipak.svg')] bg-cover bg-center bg-no-repeat sm:w-[600px] sm:min-h-[530px] ">
                    <Link href="/" className="absolute bottom-4 left-4 right-4 px-4">
                        <div className="bg-white  px-5 py-4  rounded-2xl flex justify-between items-center shadow sm:px-8 sm:py-4 ">
                            <p className="text-[20px] font-medium">Ip mahsulotlar</p>
                            <span>
                                <Image
                                    src="/icons/Frame.svg" 
                                    width={28}
                                    height={28}
                                    alt="Some image"
                                    className="rounded-xl object-cover"
                                />
                            </span>
                        </div>
                    </Link>
                </div>
                 <div className="w-full min-h-[380px] relative  rounded-2xl  bg-[url('/images/mato.png')] bg-cover bg-center bg-no-repeat sm:w-[600px] sm:min-h-[530px] ">
                    <Link href="/" className="absolute bottom-4 left-4 right-4 px-4">
                        <div className="bg-white  px-5 py-4  rounded-2xl flex justify-between items-center shadow sm:px-8 sm:py-4 ">
                            <p className="text-[20px] font-medium">Xom Mato</p>
                            <span>
                                <Image
                                    src="/icons/Frame.svg" 
                                    width={28}
                                    height={28}
                                    alt="Some image"
                                    className="rounded-xl object-cover"
                                />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
