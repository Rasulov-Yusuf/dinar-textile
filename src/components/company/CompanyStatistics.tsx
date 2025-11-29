export default function CompanyStatistics() {
  const dataji = [
    {
      id: 1,
      text: "58 tonna/kun umumiy quvvat — 18 tonna to‘qish, 40 tonna bo‘yash, 10 tonna prin.",
      title: "Kuniga",
      titleNum: 58,
      numberUnit: "tonna",
    },
    {
      id: 2,
      text: "6 000 dona/kun tayyor mahsulot — tikuv bo‘limi ishlab chiqarish hajmi.",
      title: "Kuniga",
      titleNum: 6000,
      numberUnit: "dona",
    },
    {
      id: 3,
      text: "1 500 dan ortiq xodim — korxonaning barqaror ishlab chiqarish jamoasi.",
      title: "Xodim",
      titleNum: 1500,
      numberUnit: "+",
    },
    {
      id: 4,
      text: "20+ turdagi gazlama — bo‘yalgan, prinlangan va xom materiallar assortimenti.",
      title: "Gazlama turi",
      titleNum: 20,
      numberUnit: "+",
    },
    {
      id: 5,
      text: "10+ davlatga eksport — Rossiya, Turkiya, Italiya, Polsha va boshqa mamlakatlar.",
      title: "Eksport",
      titleNum: 10,
      numberUnit: "+",
    },
  ];

  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-6">
          <div data-aos='fade-up'>
            <h2 className="font-semibold text-[40px] max-lg:text-4xl max-md:text-3xl">
              Statistikalar
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {dataji.map((data) => (
              <div
              data-aos='zoom-in'
              data-aos-delay={data.id * 100}
                key={data.id}
                className={`${
                  data.id % 2 === 0
                    ? "bg-[url(/images/company-img2.png)]"
                    : "bg-[url(/images/company-img3.png)]"
                }  bg-cover min-h-70 flex flex-col gap-y-5 justify-between items-start p-7 ${
                  data.id % 2 === 0
                    ? "border-[#ffffff] border-2 rounded-2xl bg-[url(/images/company-img2.png)"
                    : "bg-white border-[#f7f7f7] border-2 rounded-2xl bg-[url(/images/company-img3.png)"
                }`}
              >
                <p className="font-normal text-2xl max-md:text-lg">
                  {data.text}
                </p>
                <div className="flex items-center justify-center gap-x-2">
                  <p className="text-3xl font-normal max-xl:text-[27px] max-md:text-3xl max-sm:text-2xl">
                    {data.title}:{" "}
                  </p>
                  <p className="text-3xl font-semibold text-red max-xl:text-[27px] max-md:text-3xl max-sm:text-2xl">
                    {data.titleNum} {data.numberUnit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
