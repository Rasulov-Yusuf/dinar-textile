import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { newsCardType } from "@/asstes/types";

export default function NewsCard({data}:{data: newsCardType}) {
  const {url, date, title, id} = data
  return (
    <div>
      <div className="relative h-[353px] rounded-fn">
        <Image src={url} alt={title} fill/>
      </div>
      <div className="mt-3">
        <p className="font-medium text-[#9F9F9F]">{date}</p>
      </div>
      <div className="mt-2.5">
        <p>{title}</p>
      </div>
      <Button className="bg-transparent hover:bg-transparent text-black p-0 mt-4">
        <Link href={`news/${id}`} className="flex items-center gap-1">Batafsil ma’lumot <ChevronRight className="size-5"/></Link>
      </Button>
    </div>
  );
}
