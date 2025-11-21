import React from "react";
import Link from "next/link";


type Props = {
    company?: string;
    description?: string;
    phone?: string;
    email?: string;
    imageUrl?: string;
};


const defaultImage = "/images/factories.png";

export default function TextileCard({
    company = "DINAR TEXTILE GROUP",
    description = `Zamonaviy texnologiyalar bilan jihozlangan yuqori sifatli matolar ishlab chiqaruvchi fabrika. Biz bo'yalgan va xom matolar, shuningdek, tayyor trikotaj mahsulotlar yetkazib berish bilan shug'ullanamiz.`,
    phone = "+998 90 123 45 67",
    email = "info@dinar.uz",
    imageUrl = defaultImage,
}: Props) {


    return (
        <Link href={`/factories/1`}>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Image area */}
            <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-100 relative">
                <img
                    src={imageUrl}
                    alt={company}
                    className="object-cover w-full h-full"
                    style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                />
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold tracking-tight mb-3">{company}</h2>
                <p className="text-sm sm:text-base md:text-sm text-gray-700 leading-relaxed mb-6">{description}</p>

                <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-700">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Telefon</span>
                        <span className="mt-1">
                            {phone}
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Email</span>
                        <span  className="mt-1">
                            {email}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}
