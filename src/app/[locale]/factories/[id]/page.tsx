import React from "react";
import Link from "next/link";

export default function page() {
    return (
        <div className="container md:p-12">

            {/* Back Button */}
            <Link href="/factories" className="flex items-center gap-2 text-gray-600 hover:text-black mb-6">
                <span className="text-xl">
                    <img
                        src="/icons/backIcon.svg"
                        alt="Back Icon"
                    />
                </span>
                <span>Orqaga</span>
            </Link>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">Bo'yash va Pardozlash</h1>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4">
                Matorlarga yorqin rang berish, ularning uzoq muddat saqlanishi va rangining oʻchmasligini taʼminlash uchun zamonaviy pardozlash va boʻyash texnologiyalari qoʻllaniladi. Jarayon davomida maxsus kimyoviy barqarorlashtirish usullari, harorat nazorati va chuqur singdirish texnikalari yordamida gazlamaning har bir tolasi puxta boʻyaladi. Natijada mato nafaqat estetik jihatdan jozibador boʻladi, balki yuvishga, quyosh nurlariga va kundalik kiyilish jarayoniga nisbatan yuqori chidamlilikka ega boʻladi.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
                Korxonaning boʻyash sexi kuniga 40 tonna matoni barqaror sifat bilan boʻyash imkoniyatiga ega, bu esa katta hajmda ishlab chiqarish va eksport talablariga uchun yetarli quvvat yaratadi.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <img
                    src="/images/factories2.png"
                    className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                    alt="Bo'yash uskunalari"
                />

                <img
                    src="/images/factories3.png"
                    className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                    alt="Bo'yash jarayoni"
                />
            </div>
        </div>
    )
}