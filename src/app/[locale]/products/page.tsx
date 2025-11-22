import React from 'react'
import Categories from "./Categories";
import Commodity from './Commodity';
import ProducstColor from './ProducstColor';
import Image from 'next/image';


export default function page() {
  return (
    <div>
      <div className=" w-full  flex items-center justify-center text-center bg-[#CD333A]  min-h-[340px] font-semibold font-[Archivo] bg-[url('/images/Union.png')] bg-cover bg-center bg-no-repeat">
        <h1 className=' font-[Archivo] text-4xl uppercase text-white sm:text-[64px]'>Mahsulotlar</h1>
      </div>
      <div className='p-5'>
        <Categories />
      </div>
      <div className='p-5 h-full'>
        <Commodity />
      </div>  
      <div className='p-5 h-full  sm:h-screen flex justify-center items-center'>
         <ProducstColor/>
      </div>
    </div>
  )
}
