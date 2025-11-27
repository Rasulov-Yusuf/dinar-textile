import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function page() {
  return (
    <div>
      <div className='h-full sm:h-screen font-[Archivo] flex items-center flex-wrap justify-center gap-0 sm:gap-4 '>
        <div>
          <Image
            src="/images/Speeds.png"
            width={606}
            height={600}
            alt="Some image"
            className="rounded-xl object-cover"
          />
        </div>
        <div className='w-auto sm:min-w-[608px] h-full  sm:h-auto px-10 bg-white py-8 rounded-0   sm:rounded-2xl '>
          <h1 className='text-[40px] font-semibold mb-4'>Birrangli top yuqori yoqali</h1>
          <div>
            <p className='text-lg mb-2'>4142</p>
            <p className='text-sm text-[#9F9F9F] mb-2'>ML XL XXL</p>
            <p className='text-sm text-[#9F9F9F] mb-4'>Red</p>
          </div>
          <p className='flex flex-wrap mb-9  w-full  sm:w-[400px]  text-lg leading-9'> Birrangli top yuqori yoqali
            Yumshoq cho'zilgan mikrofiberdan yengsiz yoqali, qovurg'ali ayollar to'pi. Maxsus choksiz texnologiya mahsulotni tanaga mukammal moslashtirishga imkon beradi, yarim qo'shni siluet qomatni ta'kidlaydi.
            - elementlar yo'q
            - tik yoqa
            - yengsiz model
            - normal posadka</p>
          <div>
            <Link href={'/'}>
              <button className='bg-[#CD333A] p-3.5 px-10  sm:p-5 sm:px-15 text-white text-lg rounded-[95px]'>So’rov yuborish</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:h-full py-0  sm:py-10 p-0 sm:px-4">
        <div className="  w-full sm:max-w-7xl mx-auto bg-white rounded-0 sm:rounded-xl gap-7 p-10 flex flex-wrap justify-between ">

          <h1 className="text-[40px] font-semibold font-[Archivo] mb-8">Buyurtma</h1>
          <div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 text-sm">Sifat</label>
                <select className="w-full mt-1  bg-[#F7F7F7] border-gray-300 rounded-md p-5.5 focus:ring-red-500 focus:outline-none">
                  <option value="">Tanlang</option>
                  <option value="">Tanlang</option>
                  <option value="">Tanlang</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 text-sm">Tarkibi</label>
                <select className="w-full mt-1  bg-[#F7F7F7] border-gray-300 rounded-md p-5.5 focus:ring-red-500 focus:outline-none">
                  <option value="">Tanlang</option>
                  <option value="">Tanlang</option>
                  <option value="">Tanlang</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 text-sm">Buyurtma miqdori</label>
                <input
                  type="text"
                  className="w-full mt-1  bg-[#F7F7F7] border-gray-300 rounded-md p-5.5 focus:ring-red-500"
                  placeholder="Miqdorni kiriting"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm">Ism Familiya</label>
                <input
                  type="text"
                  className="w-full mt-1  bg-[#F7F7F7] border-gray-300 rounded-md p-5.5 focus:ring-red-500"
                  placeholder="Ismingiz"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm">Telefon raqam</label>
                <input
                  type="text"
                  className="w-full mt-1  bg-[#F7F7F7] border-gray-300 rounded-md p-5.5 focus:ring-red-500"
                  placeholder="+998 xx xxx xx xx"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm">Mamlakat</label>
                <input
                  type="text"
                  className="w-full mt-1  bg-[#F7F7F7] border-gray-300 rounded-md p-5.5 focus:ring-red-500"
                  placeholder="Mamlakatingiz"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-gray-700 text-sm">Izoh</label>
                <textarea
                  className="w-full bg-[#F7F7F7] border-gray-300 rounded-md p-3 h-24 focus:ring-red-500"
                  placeholder="Izoh qoldiring"
                ></textarea>
              </div>
            </form>
            <div className="flex mt-8 sm:items-baseline sm:justify-baseline">
              <Link href={'/'}>
                <button className='bg-[#CD333A] p-3.5 px-10  sm:p-5 sm:px-15 text-white text-lg rounded-[95px]'>So’rov yuborish</button>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
