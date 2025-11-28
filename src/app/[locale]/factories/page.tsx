import { factoryData } from "@/asstes/data";
import FactoryCard from "@/components/shared/FactoryCard";
import HeroPattern from "@/components/shared/HeroPattern";

export default function page() {
  return (
    <>
      <HeroPattern>Fabrikalar</HeroPattern>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-25">
          {
            factoryData.map(data=>(
              <FactoryCard key={data.id} data={data}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
