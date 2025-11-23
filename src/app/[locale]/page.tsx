import { Hero, Testimonials, About, Products, News, Exports, Techs, CareerComponent } from "@/components";
import Position from "@/components/home/Position";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <Testimonials/>
      <About/>
      <Products/>
      <News/>
      <Exports/>
      <Techs/>
      <CareerComponent/>
      <Position/>
    </>
  );
}
