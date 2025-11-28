import { datalion } from "@/asstes/data";
import NewsCard from "../shared/NewsCard";

export default function NewsComponent() {
  return (
    <>
      <section className="mt-25">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {datalion.map((data) => (
            <NewsCard key={data.id} data={data}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
