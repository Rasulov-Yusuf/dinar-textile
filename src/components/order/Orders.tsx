"use client";
import { useState } from "react";
import Heading2 from "../shared/Heading2";

export default function Orders() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center nav-link">
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        >
          Buyurtma
        </button>

        {isOpen && (
          <div
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <div className="bg-white rounded-fn w-full p-8 md:flex items-start gap-14 container">
              <Heading2>Buyurtma</Heading2>

              <div className="flex flex-col gap-4 grow mt-4 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <select className="w-full px-4 py-3 bg-bg rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer">
                      <option>Kategoriya</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-bg rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer">
                      <option>Sifat</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-bg rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer">
                      <option>Tarkibi</option>
                    </select>
                  </div>
                </div>

                {/* Ikkinchi qator */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Buyurtma miqdori"
                    className="w-full px-4 py-3 bg-bg rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Ism Familiya"
                    className="w-full px-4 py-3 bg-bg rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer placeholder-gray-400"
                  />
                </div>

                {/* Uchinchi qator */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefon raqam"
                    className="w-full px-4 py-3 bg-bg rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Mamlakat"
                    className="w-full px-4 py-3 bg-bg rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer placeholder-gray-400"
                  />
                </div>

                {/* Izoh */}
                <textarea
                  placeholder="Izoh"
                  rows={4}
                  className="w-full px-4 py-3 bg-bg rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer placeholder-gray-400 resize-none"
                ></textarea>

                {/* Yuborish tugmasi */}
                <button className="w-full md:w-auto mx-auto block px-32 py-4 bg-red text-white rounded-full font-semibold text-lg hover:bg-red-500 transition cursor-pointer">
                  So'rov yuborish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
