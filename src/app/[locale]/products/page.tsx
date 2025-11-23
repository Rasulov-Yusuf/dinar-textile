import { ProductsCategory, Commodity, ProductsColor, HeroBanner } from "@/components";

export default function page() {
  return (
    <>
      <HeroBanner>Mahsulotlar</HeroBanner>

      <ProductsCategory/>

      <Commodity />

      <ProductsColor />
    </>
  );
}
