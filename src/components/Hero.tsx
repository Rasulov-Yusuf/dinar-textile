"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero() {
    const pathname = usePathname();
    const localeList = ["uz", "ru", "en"];
    const parts = pathname
        .split("/")
        .filter(Boolean)
        .filter((p) => !localeList.includes(p.toLowerCase()));


    const crumbs = parts.map((part, idx) => {
        const href = "/" + parts.slice(0, idx + 1).join("/");
        const name = part.charAt(0).toUpperCase() + part.slice(1);
        return { name, href };
    });


    return (
        <div className="w-full">
            <section className="flex flex-col mb-10 ">
                <div
                    className="
                        relative 
                        w-full 
                        h-[340px] sm:h-[400px] 
                        flex 
                        flex-col 
                        justify-center 
                        bg-[#CD333A]
                        bg-[url('/images/pattern.png')]
                        bg-cover 
                        bg-center 
                        bg-no-repeat
                        items-center
                    "
                >
                    <h1
                        className="flex text-white text-lg opacity-90 text-[40px] sm:text-[54px] md:text-[65px] uppercase font-semibold"
                    >
                        {crumbs.map((crumb, idx) => (
                            <span key={idx} className="flex items-center justify-center">
                                {idx !== 0 && <span className="mx-1">/</span>}
                                <Link href={crumb.href}>
                                    {crumb.name}
                                </Link>
                            </span>
                        ))}
                    </h1>
                </div>


            </section>
        </div>
    );
}
