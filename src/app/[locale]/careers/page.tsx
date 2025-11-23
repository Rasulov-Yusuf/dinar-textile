import Link from 'next/link'

export default function page() {

  const Vacancies = [
    {
      "name": "Haydovchi",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "Moliya maslahatchisi",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "Murabbiy",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "Marketing mutaxassisi",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "IT qo'llab-quvvatlash",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "Sotuv menejeri",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "Marketing mutaxassisi",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "IT qo'llab-quvvatlash",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
    {
      "name": "IT qo'llab-quvvatlash",
      "description": "Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
    },
  ]

  return (
    <div>
      <div className=" w-full  flex items-center justify-center text-center bg-[#CD333A]  min-h-[340px] font-semibold font-archivo bg-[url('/images/Union.png')] bg-cover bg-center bg-no-repeat">
        <h1 className=' font-archivo text-4xl uppercase text-white sm:text-[64px]'>Vakansiyalar</h1>
      </div>
      <div className='container flex items-center flex-wrap gap-4 justify-center py-9 font-archivo'>
        {Vacancies.map((item, index) => {
          return (
              <div key={index} className='bg-white rounded-2xl p-6 w-full  sm:w-[32%] sm:h-1/2'>
                <div className=' flex items-center gap-2 mb-4'>
                  <h1 className='text-2xl font-medium '>{item.name}</h1>
                  <img src={"/icons/Frame.svg"} alt='Hello' />
                </div>
                <p className='leading-8 mb-15 text-base'>{item.description}</p>

                <Link href={'/'}>
                  <button className=' border-2 p-3.5 px-9 border-black  sm:p-3 sm:px-9 text-lg rounded-[95px]'>Ariza topshirish</button>
                </Link>
              </div>
          )
        })
        }
      </div>
    </div>
  )
}
