"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <Select
      value={locale}
      onValueChange={(value) => handleLanguageChange(value)}
    >
      <SelectTrigger className="w-min border-none text-black shadow-none px-0">
        <SelectValue placeholder="Language" />
      </SelectTrigger>

      <SelectContent className="mt-2">
        {["uz", "en", "ru"].map((lang) => (
          <SelectItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
