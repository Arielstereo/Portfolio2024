"use client"

import Image from "next/image";
import Link from "next/link";
import TailwindBadge from "../badges/TailwindBadge";
import NextBadge from "../badges/NextBadge";
import MernBadge from "../badges/MernBadge";
import { ZustandBadge } from "../badges/ZustandBadge";
import AstroBadge from "../badges/AstroBadge";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = ({ img, description, url, name, tech1, tech2, tech3 }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const badges = {
    Tailwind: <TailwindBadge />,
    Next: <NextBadge />,
    MERN: <MernBadge />,
    Zustand: <ZustandBadge />,
    Astro: <AstroBadge />,
  };
  return (
    <div data-aos="zoom-in-up" className="group flex flex-col justify-start items-start gap-2 w-96 h-56 relative p-4">
      <Image
        src={img}
        width={600}
        height={600}
        className="absolute duration-700 shadow-md group-hover:-translate-y-16 group-hover:translate-x-48 -bottom-20 -right-6 w-1/2 group-hover:w-full group-hover:h-full h-1/2 rounded-lg"
        alt="image"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-200">{name}</h2>
        <p className="text-gray-400 line-clamp-3">{description}</p>
      </div>
      <div className="flex gap-2">
        {badges[tech1]}
        {badges[tech2]}
        {badges[tech3]}
      </div>
      <Link
        href={url}
        target="_blank"
        className="hover:bg-slate-900 hover:border hover:border-slate-50 bg-slate-300 text-gray-800 hover:text-gray-200 mt-2 rounded p-2 px-12"
      >
        Website
      </Link>
    </div>
  );
};

export default ProjectCard;
