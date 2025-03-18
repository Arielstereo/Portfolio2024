/* eslint-disable react/no-unescaped-entities */
"use client";

import DecryptedText from "@/components/DecryptedText/DecryptedText";
import RotatingText from "@/components/RotatingText/RotatingText";
import { Orbitron } from "next/font/google";
import { useTranslations } from "next-intl";

const font = Orbitron({ subsets: ["latin"], weight: "400" });

export default function About() {
  const text = useTranslations("About");

  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:gap-16 mt-32">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-3xl md:text-5xl text-white">{text("skills")}</h2>
          <RotatingText
            texts={["React", "Next.js", "Tailwind", "Node", "Git", "Astro", "MongoDB"]}
            mainClassName="w-48 md:w-96 text-white border-2 border-sky-400 bg-black text-2xl  md:text-4xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
      </div>
      <div className={`${font.className} text-green-300 text-xl sm:text-3xl w-[320px] h-80 lg:h-96 lg:w-1/2`}>
        <DecryptedText
          text={`${text("description")}`}
          animateOn="view"
          speed={50}
          sequential="true"
          className="text-slate-100"
        />
      </div>
    </div>
  );
}
