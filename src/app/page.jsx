"use client";

import SkillsCard from "@/components/cards/SkillsCard";
import { Arizonia, Michroma } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";


const fontTitle = Arizonia({ subsets: ["latin"], weight: "400" });
const fontSubTitle = Michroma({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center mt-48 sm:mt-64 gap-16 sm:gap-32">
      <div className="flex flex-col ml-8 gap-4">
        <h1
          className={`${fontTitle.className} text-6xl sm:text-8xl text-slate-200 font-black`}
        >
          Ariel Martinez
        </h1>
        <div
          className={`${fontSubTitle.className} text-sky-400 text-2xl sm:text-4xl`}
        >
          <Typewriter
            words={["Frontend Developer", "Programmer", "Web Developer"]}
            loop={50}
            cursor
            cursorColor="#18A4E7"
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <div>
        <SkillsCard />
      </div>
    </main>
  );
}
