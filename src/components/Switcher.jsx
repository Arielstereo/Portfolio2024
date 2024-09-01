"use client";

import Loading from "@/app/[locale]/loading";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition, useState } from "react";

export default function Switcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const [locale, setLocale] = useState(localActive);

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

    setLocale(nextLocale);
    startTransition(() => {
      router.push(newPathname);
    });
  };

  return (
    <div className="absolute top-12 lg:top-14 right-16">
      <button
        onClick={toggleLocale}
        disabled={isPending}
        className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"
          />
        </svg>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          {locale === "en" ? "Español" : "English"}
        </div>
      </button>
    </div>
  );
}
