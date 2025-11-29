import { CompanyData } from "@/asstes/types";
import Image from "next/image";
import Link from "next/link";

export default function FactoryCard({ data }: { data: CompanyData }) {
  const { imageUrl, company, description, email, phone, id } = data;
  return (
    <Link
      data-aos="zoom-in"
      data-aos-delay={data.id * 100}
      href={`/factories/${id}`}
      className="block"
    >
      <div className="max-w-3xl rounded-fn overflow-hidden border border-[#E1E1E1]">
        <div className="w-full h-64 sm:h-72 md:h-80 relative">
          <Image
            src={imageUrl}
            alt={company}
            className="object-cover w-full h-full"
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          />
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold tracking-tight mb-3">
            {company}
          </h2>
          <p className="text-sm sm:text-base md:text-sm text-gray-700 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-700">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Telefon</span>
              <span className="mt-1">{phone}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Email</span>
              <span className="mt-1">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
