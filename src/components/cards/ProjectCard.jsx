"use client";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import badges from "@/components/BadgeList";
import { ShineBorder } from "../magicui/shine-border";


const ProjectCard = ({ img, description, url, name, tech1, tech2, tech3 }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const text = useTranslations("Project");

  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-col justify-start items-start gap-2 w-full relative p-4 mt-8 rounded-lg"
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

      <div className="w-80 mb-2">
        <Link href={url} target="_blank">
          <Image
            src={img}
            width={600}
            height={600}
            className="w-fit rounded-lg mb-4 hover:scale-110 transform transition duration-300 ease-in-out"
            alt="image"
          />
        </Link>

        <h2 className="text-2xl font-bold mb-2 text-slate-200">{name}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-12">
        {badges[tech1]}
        {badges[tech2]}
        {badges[tech3]}
      </div>
    </div>
  );
};

export default ProjectCard;
