"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();

  const locale = useLocale();

  let cleanPath = pathname.replace(`/${locale}`, "");
  if (cleanPath === "") cleanPath = "/";

  const isActive = cleanPath === href || cleanPath.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`${isActive ? "nav-active" : ""} text-black relative nav-link`}
    >
      {label}
    </Link>
  );
}
