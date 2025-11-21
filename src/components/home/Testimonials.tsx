import Image from "next/image";
import terranova from "@/../public/images/terranova.png";

export default function Testimonials() {
  const arr = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <section className="pt-[60px]">
      <div className="container">
        <h2 className="mb-6 text-center font-archivo font-medium leading-[140%] text-2xl">Bizning hamkorlar</h2>
      </div>
      <div className="overflow-hidden relative testimonials">
        <div className="tesha flex gap-[100px]" area-hidden={true}>
          <ul className="flex items-center gap-[100px]">
            {arr.map((item) => (
              <li
                key={item}
                className="w-[200px] shrink-0 flex gap-2 items-center"
              >
                <Image src={terranova} alt="terranova" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-[100px]">
            {arr.map((item) => (
              <li
                key={item}
                className="w-[200px] shrink-0 flex gap-2 items-center"
              >
                <Image src={terranova} alt="terranova" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
