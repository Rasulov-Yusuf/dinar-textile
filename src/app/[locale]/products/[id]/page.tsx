import React from 'react'

import Link from 'next/link'


export default function page() {
  return (

    <div className="w-full mt-16">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10">


        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Tayyor trikotaj kiyimlar
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dinar kompaniyasi ayollar va erkaklar uchun trikotaj kiyimlarning
            keng assortimentini taklif etadi: ichki kiyim va futbolkalardan
            tortib xudi va svitshotlarga qadar. Shuningdek, biz bolalar
            kiyimlariga ixtisoslashganmiz, jumladan, bodilar, sliplar, galqoplar,
            kombinezonlar, pastki ko‘ylaklar, tagliklar va boshqalar.

            Barcha mahsulotlarimiz zamonaviy ishlab chiqarish texnologiyalaridan
            foydalangan holda yuqori sifatli materiallardan tayyorlangan. Biz eng
            so‘nggi moda tendensiyalariga rioya qilamiz va har kuni uchun zamonaviy
            va qulay narsalarni taklif qilamiz.
          </p>


          <button className="flex items-center gap-2 bg-[#CD333A] text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            <span className="text-xl">
              <img src="/icons/pdfIcon.svg" alt="pdf" />
            </span>
            PDF yuklab olish
          </button>
        </div>


        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src="/images/girl2.png"
            alt="Factory Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* --- Bottom Features Section --- */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Ishlash samaradorligi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3 ">
              <img src="/icons/tabletIcon.svg" alt="tablet" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              O‘rta va yuqori darajadagi chakana sotuvchilar va tayyor mahsulotlardagi
              brendlar ishlab chiqaruvchisi bo‘lish
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3 ">
              <img src="/icons/t-shirtIcon.svg" alt="t-shirt" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Kiyim-kechak sanoati o‘rtasida hamkorlikni rivojlantirish orqali yangi
              imkoniyatlar yaratish, innovatsiyalarni joriy etish
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3 ">
              <img src="/icons/IconIcon.svg" alt="Icons" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Chakana savdogarlar va yetkazib beruvchilar birgalikda dizayn qilish
              orqali yangi mahsulotlar yaratishlari mumkin.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3 ">
              <img src="/icons/flowerIcon.svg" alt="flower" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Rejalashtirish va o‘zimizni global bozorlarga kengaytirish uchun yuqori
              sifati yetkazib beruvchi sifatida joylashtirish.
            </p>
          </div>
        </div>
      </div>


      <div className="container w-full h-full md:h-full py-0  sm:py-10 p-0 sm:px-4">
        <div className="w-full sm:max-w-7xl mx-auto bg-white rounded-0 sm:rounded-xl gap-7 p-10 flex flex-wrap justify-between ">

          <h2 className="text-[40px] font-semibold mb-8">Buyurtma</h2>
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
