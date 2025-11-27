import About from "@/components/home/About";
import CareerComponent from "@/components/home/CareerComponent";
import Exports from "@/components/home/Exports";
import Hero from "@/components/home/Hero";
import News from "@/components/home/News";
import Products from "@/components/home/Products";
import Techs from "@/components/home/Techs";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/shared/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Products />
      <News />
      <Exports />
      <Techs />
      <CareerComponent />
      <Contact/>
    </>
  );
}
