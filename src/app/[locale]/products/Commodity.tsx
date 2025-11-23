"use client";
import { useState } from "react";
import Link from 'next/link';

export default function Commodity() {
  const [selected, setSelected] = useState("");


  const product = [
    {
      number: 4142,
      text: 'ML XL XXL',
      color: 'Red'
    },
    {
      number: 4142,
      text: 'ML XL XXL',
      color: 'Red'
    },
    {
      number: 4142,
      text: 'ML XL XXL',
      color: 'Red'
    },
    {
      number: 4142,
      text: 'ML XL XXL',
      color: 'Red'
    },
    {
      number: 4142,
      text: 'ML XL XXL',
      color: 'Red'
    },
    {
      number: 4142,
      text: 'ML XL XXL',
      color: 'Red'
    },

  ];



  return (
    <div className='container font-archivo mx-auto py-9 '>
      <div className='flex justify-between items-center'>
        <h1 className=' text-2xl font-semibold font-archivo sm:text-[40px]'>Mahsulotlarimiz</h1>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className=" bg-white border-0 border-white text-sm   rounded-xl  py-3 px-3 sm:text-lg sm:py-5 sm:px-6  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="ayollar" disabled>
            Ayollar
          </option>
          <option value="option1">Ayollar</option>
          <option value="option2">Erkaklar</option>
          <option value="option3">Yosh bollar</option>
        </select>

      </div>

      <div className="flex justify-center items-center flex-wrap py-5 gap-3 sm:gap-4">
        {product.map((item, index) => (
          <Link href={'/products/id'}>
            <div key={index} className="  p-0 sm:p-4 rounded-xl hover:bg-white transition-all">
              <div>
                <img className='w-[150px] h-[180px]  sm:min-h-[440px] sm:min-w-[350px]  ' src="/images/girl.png" alt="" />
              </div>
              <p className=" text-lg sm:text-2xl py-3 font-medium text-center">{item.number}</p>
              <p className="text-xs sm:text-sm text-[#9F9F9F] text-center">{item.text}</p>
              <p className="text-xs sm:text-sm py-1 text-[#9F9F9F] text-center">{item.color}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
