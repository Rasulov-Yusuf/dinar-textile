export default function HeroPattern({ children }: { children: string }) {
  return (
    <section className="bg-red bg-[url('/images/Union.png')] bg-center">
      <div className="container">
        <h1 className="font-archivo font-semibold leading-[120%] tracking-[-2%] text-white uppercase text-4xl sm:text-5xl lg:text-[64px] text-center pt-[170px] pb-[93px]">
          {children}
        </h1>
      </div>
    </section>
  );
}
