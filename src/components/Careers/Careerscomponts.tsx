import React from 'react'
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Careerscomponts() {

  const information = [
    {
      id : 1,
      name: "Haydovchi",
      title: "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      id : 2,
      name: "Moliya maslahatchisi",
      title: "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      id : 3,
      name: "Murabbiy",
      title: "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      id : 4,
      name: "Marketing mutaxassisi",
      title: "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      id : 5,
      name: "IT qo'llab-quvvatlash",
      title: "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      id : 6,
      name: "Sotuv menejeri",
      title: "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
  ]

  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-15">
            {
              information.map((item) => {
                return (
                  <div key={item.id} className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-1">
                        <h3 className="leading-[140%] tracking-[-1%] text-2xl md:text-2xl lg:text-2xl">{item.name}</h3>
                        <ChevronRight size={24} />
                      </div>
                      <p className="leading-[160%]">{item.title}</p>
                    </div>
                    <div className="flex mt-30">
                      <Link
                        href={`/careers/${item.name}`}
                        className="py-4 border rounded-full border-black px-4 sm:px-6"
                      >
                        Ariza topshirish
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
