import React from 'react'
import Pagination from './Pagination'

export default function page() {
  return (
    <div>
      <div className=" w-full  flex items-center justify-center text-center bg-[#CD333A]  min-h-[340px] font-semibold font-archivo bg-[url('/images/Union.png')] bg-cover bg-center bg-no-repeat">
        <h1 className=' font-archivo text-4xl uppercase text-white sm:text-[64px]'>Yangiliklar</h1>
      </div>
      <div className='container'>
        <div>

        </div>
        <Pagination />
      </div>
    </div>
  )
}
