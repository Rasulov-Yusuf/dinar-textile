import SertificateDialog from "./SertificateDialog";

export default function CompanySertificates() {
  const dataji2 = [
    {
      id: 1,
      image: "/images/company-img5.png",
    },
    {
      id: 2,
      image: "/images/company-img5.png",
    },
    {
      id: 3,
      image: "/images/company-img5.png",
    },
  ];
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex flex-col gap-y-6 pb-6">
          <h3 data-aos='fade-up' className="text-4xl font-semibold  max-md:text-[27px]">
            Sertifikatlar
          </h3>

          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {dataji2.map((data) => (
              <div
              data-aos='zoom-in'
              data-aos-delay={data.id*100}
                key={data.id}
                className="flex justify-center items-center bg-white rounded-fn w-100 h-[450px] py-5.5 px-13"
              >
                <div className="relative w-full h-full">
                  <SertificateDialog data={data}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
