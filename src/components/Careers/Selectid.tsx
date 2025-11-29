import { FileText } from "lucide-react";

export default function Selectid() {
  return (
    <div data-aos='zoom-in'  className="bg-white rounded-fn py-[30px] h-full px-4 w-full sm:px-[30px] sm:max-w-[506px] sticky top-25">
      <h3 className="font-archivo leading-normal mb-6 tracking-[-1%] font-semibold text-[32px]">
        Arizangizni yuboring
      </h3>
      <form className="flex flex-wrap gap-4 w-full">
        <input
          type="text"
          placeholder="Ism Familya"
          className="bg-bg py-[18px] px-5 rounded-full w-full"
        />
        <input
          type="text"
          placeholder="Telefon raqam"
          className="bg-bg py-[18px] px-5 rounded-full w-full"
        />
        <select className="bg-bg py-[18px] text-[#919191] px-5 rounded-full w-full">
          <option value="">Tajribasi</option>
          <option value="junior">Junior</option>
          <option value="middle">Middle</option>
          <option value="senior">Senior</option>
        </select>
        <div className="flex items-center gap-1 relative cursor-pointer">
          <input type="file" className="absolute opacity-0 top-0 left-0" />
          <div className="flex items-center gap-1 pointer-events-none">
            <FileText size={22} /> Rezyume yuklash
          </div>
        </div>
        <button
          type="submit"
          className="bg-red text-white rounded-full text-lg py-4.5 cursor-pointer w-full"
        >
          Ariza qoldirish
        </button>
      </form>
    </div>
  );
}
