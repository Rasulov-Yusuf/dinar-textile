import Commodity from "@/components/products/Commodity";
import ProductsCategory from "@/components/products/ProductsCategory";
import ProductsColor from "@/components/products/ProductsColor";
import HeroPattern from "@/components/shared/HeroPattern";

export default function page() {
  return (
    <>
      <HeroPattern>Mahsulotlar</HeroPattern>

      <ProductsCategory/>

      <Commodity />

      <ProductsColor />
    </>
  );
}
