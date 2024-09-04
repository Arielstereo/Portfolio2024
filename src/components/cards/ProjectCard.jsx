"use client";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import badges from "@/components/BadgeList";

const ProjectCard = ({
  img,
  description,
  url,
  name,
  tech1,
  tech2,
  tech3,
  tech4,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const text = useTranslations("Project");

  return (
    <div
      data-aos="zoom-in-up"
      className="group flex flex-col justify-start items-start gap-2 w-96 h-56 relative p-4"
    >
      <Image
        src={img}
        width={600}
        height={600}
        className="absolute duration-700 shadow-md group-hover:-translate-y-16 group-hover:translate-x-12 -bottom-20 -right-2 w-1/2 group-hover:w-full group-hover:h-full h-1/2 rounded-lg z-50"
        alt="image"
      />
      <div className="w-[325px] mb-2">
        <h2 className="text-2xl font-bold mb-2 text-slate-200">{name}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {badges[tech1]}
        {badges[tech2]}
        {badges[tech3]}
        {badges[tech4]}
      </div>
      <Link
        href={url}
        target="_blank"
        className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-8 py-5 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 z-0 ring-1 ring-white"
      >
        <span className="text-lg">{text("button")}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-full bg-white/20"></div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
