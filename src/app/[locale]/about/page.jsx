/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslations } from "next-intl";
import { BoxReveal } from "@/components/magicui/box-reveal";
import React from "@/components/icons/React";
import Nextjs from "@/components/icons/Next";
import Astro from "@/components/icons/Astro";
import Nodejs from "@/components/icons/Node";
import MongoDB from "@/components/icons/Mongo";
import Git from "@/components/icons/Git";
import TailwindCSS from "@/components/icons/Tailwind";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function About() {
  const text = useTranslations("About");

  return (
    <div
      className="size-full max-w-xl items-center justify-center overflow-hidden mt-32 md:mt-24 mx-auto"
    >
      <BoxReveal boxColor={"#51C9F0"} duration={0.5}>
        <p className="text-2xl md:text-4xl font-semibold text-slate-100 mb-4 ml-4 md:ml-0">
          {text("skills")}
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#51C9F0"} duration={0.5}>
        <div className="flex flex-wrap justify-center gap-8 mt-2 mx-2 md:mx-16">
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <React className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base">React.js</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <Nextjs className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <Astro className="w-8 h-8 md:w-9 hmd:-9 mt-1" />
            <span className="text-sm md:text-base">Astro</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <Nodejs className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <MongoDB className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base">MongoDB</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <Git className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base">Git</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50">
            <TailwindCSS className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base">Tailwind.css</span>
          </div>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#51C9F0"} duration={0.5}>
        <div className="mt-6 mb-2 mx-4 md:mx-0">
          <p className="text-sm md:text-lg text-slate-100">{text("description")}</p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#51C9F0"} duration={0.5}>
        <Button className="mt-2 ml-4 md:ml-0 bg-slate-950 border border-white text-lg px-8 py-4">
          <Link className="text-sky-400 text-sm" href="https://cv.empren.dev" target="_blank">
            CV Online
          </Link>
        </Button>
      </BoxReveal>
    </div>
  );
}
