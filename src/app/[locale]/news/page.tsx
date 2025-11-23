import Image from "next/image";
import Link from "next/link";

export default function page() {

  const datalion = [
    {
      id: 1,
      image: "/images/news-img1.png",
      title: "Dinar ishchi tashriflari: birinchi bosqich yakunlandi",
      date: "14/02/2025",
    },
    {
      id: 2,
      image: "/images/news-img2.png",
      title: "Dinar ishchi tashriflari: birinchi bosqich yakunlandi",
      date: "14/02/2025",
    },
    {
      id: 3,
      image: "/images/news-img2.png",
      title: "Dinar ishchi tashriflari: birinchi bosqich yakunlandi",
      date: "14/02/2025",
    },
    {
      id: 4,
      image: "/images/news-img1.png",
      title: "Dinar ishchi tashriflari: birinchi bosqich yakunlandi",
      date: "14/02/2025",
    },
    {
      id: 5,
      image: "/images/news-img1.png",
      title: "Dinar ishchi tashriflari: birinchi bosqich yakunlandi",
      date: "14/02/2025",
    },
    {
      id: 6,
      image: "/images/news-img2.png",
      title: "Dinar ishchi tashriflari: birinchi bosqich yakunlandi",
      date: "14/02/2025",
    },
  ];

  return (
    <div>
      
      {/* Navbar */}
      <div className="w-full h-[340px]  bg-[#CD333A] flex justify-center items-center">
        <h1 className="text-6xl font-semibold tracking-tighter uppercase text-white">
          News
        </h1>
      </div>

      {/* News Section */}
      <div className="container my-25">
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {datalion.map((data) => (
            <div key={data.id} className="flex flex-col gap-y-3">
              <Image src={data.image} width={600} height={350} alt="img" />
              <div className="flex flex-col gap-y-2">
                <p className="text-[#9F9F9F] text-[16px] font-medium font-inter">
                  {data.date}
                </p>
                <h2 className="text-black text-2xl font-medium font-inter max-lg:text-[20px] max-sm:text-[18px]">
                  {data.title}
                </h2>
                <Link
                  href={""}
                  className="flex gap-x-3 text-[16px] text-black font-medium font-inter"
                >
                  Batafsil malumot
                  <Image
                    src="/icons/news-icon1.svg"
                    width={6}
                    height={12}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
