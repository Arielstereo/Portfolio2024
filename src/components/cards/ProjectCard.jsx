"use client"

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import badges from '@/components/BadgeList'


const ProjectCard = ({ img, description, url, name, tech1, tech2, tech3, tech4 }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const text = useTranslations("Project")

  return (
    <div data-aos="zoom-in-up" className="group flex flex-col justify-start items-start gap-2 w-96 h-56 relative p-4">
      <Image
        src={img}
        width={600}
        height={600}
        className="absolute duration-700 shadow-md group-hover:-translate-y-16 group-hover:translate-x-12 -bottom-20 -right-2 w-1/2 group-hover:w-full group-hover:h-full h-1/2 rounded-lg"
        alt="image"
      />
      <div className="w-full mb-2">
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
        className="hover:bg-slate-900 hover:border hover:border-slate-50 bg-slate-300 text-gray-800 hover:text-gray-200 mt-2 rounded p-2 px-12"
      >
        {text("button")}
      </Link>
    </div>
  );
};

export default ProjectCard;
