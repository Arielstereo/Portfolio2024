"use client";

import BlurText from "@/components/BlurText/BlurText";
import { Typewriter } from "react-simple-typewriter";
import { Bakbak_One } from "next/font/google";
import { useTranslations } from "next-intl";
import Cloud from "@/components/Cloud";
import Link from "next/link";

const fontTitle = Bakbak_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const text = useTranslations("Home");
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center mt-32 md:mt-48 gap-4">
      <div className="flex flex-col text-center gap-4">
        <BlurText
          text="Ariel Martinez"
          delay={150}
          animateBy="words"
          direction="top"
          className={`${fontTitle.className} text-6xl sm:text-8xl text-slate-50 flex justify-center`}
        />
        <div className=" text-sky-400 text-xl sm:text-4xl ml-2">
          <Typewriter
            words={[
              `${text("title2")}`,
              `${text("title3")}`,
              `${text("title1")}`,
            ]}
            loop={50}
            cursor
            cursorColor="#18A4E7"
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="/CV25.pdf"
            download
            target="_blank"
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-4 md:px-8 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 z-0 ring-1 ring-white"
          >
            <span className="text-sm md:text-base">{text("CV")}</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-full bg-white/20"></div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Cloud />
      </div>
    </main>
  );
}
