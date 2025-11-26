import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function NewsCard() {
  return (
    <div>
      <div className="relative h-[353px] rounded-fn">
        <Image src={'/images/products1.png'} alt="title" fill/>
      </div>
      <div className="mt-3">
        <p className="font-medium text-[#9F9F9F]">14/02/2025</p>
      </div>
      <div className="mt-2.5">
        <p>Dinar ishchi tashriflari: birinchi bosqich yakunlandi</p>
      </div>
      <Button className="bg-transparent hover:bg-transparent text-black p-0 mt-4">
        <Link href={'/news'} className="flex items-center gap-1">Batafsil ma’lumot <ChevronRight className="size-5"/></Link>
      </Button>
    </div>
  );
}
