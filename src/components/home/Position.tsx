import React from 'react'
import Map from '../shared/Map'
import { Button } from '../ui/button'

export default function Position() {
  return (
    <section id='position' className='mt-[100px]'>
        <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className="map col-span-3">
                    {/* <Map/> */} map
                </div>
                <div className='bg-white rounded-fn py-[30px] px-4 sm:px-[30px] col-span-2'>
                    <h3 className='font-archivo leading-[100%] tracking-[-1%] font-semibold text-[32px]'>Arizangizni yuboring</h3>
                    <form className='flex flex-col gap-4 mt-6'>
                        <input type="text" placeholder='Ism Familya' className='bg-bg py-[18px] px-5 rounded-full'/>
                        <input type="text" placeholder='Telefon raqam' className='bg-bg py-[18px] px-5 rounded-full'/>
                        <input type="text" placeholder='Mamlakat' className='bg-bg py-[18px] px-5 rounded-full'/>
                        <textarea placeholder='Mamlakat' className='bg-bg py-4 px-5 rounded-fn resize-none h-28'></textarea>

                        
                            <button type='submit' className='bg-red text-white rounded-full text-lg py-5 cursor-pointer'>Ariza qoldirish</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
