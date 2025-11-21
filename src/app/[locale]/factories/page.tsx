import Hero from "@/components/Hero";
import TextileCard from "@/components/TextileCard";


export default function page() {
  return (
    <>
      <Hero />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <TextileCard />
        <TextileCard />
        <TextileCard />
        <TextileCard />
      </div>
    </>
  )
}
