"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Portfolio = () => {
  const text = useTranslations("Portfolio");
  const keys = [
    "project1",
    "project2",
    "project3",
    "project4",
    "project5",
    "project6",
  ];

  const customCommandMap = {
    email: "user@gmail.com",
    password: "user123",
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:gap-6 mt-32">
      <h2 className="text-3xl md:text-4xl text-white mt-8">{text("subtitle")}</h2>
      <ScriptCopyBtn
        className="px-2"
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        lightTheme="vitesse-dark"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap}
      />
      <div className="flex flex-wrap justify-center items-center gap-32 mx-2 md:mx-64 mb-8 md:mb-32">
        {keys.map((key) => (
          <div key={key}>
            <ProjectCard
              key={text(`${key}.id`)}
              name={text(`${key}.name`)}
              description={text(`${key}.description`)}
              url={text(`${key}.url`)}
              img={text(`${key}.img`)}
              tech1={text(`${key}.tech1`)}
              tech2={text(`${key}.tech2`)}
              tech3={text(`${key}.tech3`)}
            />
          </div>
        ))}
      </div>
      <span className="text-xl md:text-3xl text-slate-100 my-8">
        {text("github")} {" "}
        <Link
          href="https://github.com/Arielstereo?tab=repositories"
          target="_blank"
          className="text-slate-400 hover:text-slate-300 animate-pulse" 
        >
          GitHub
        </Link>
        <i className="icon-[mage--stars-c-fill] text-yellow-300" role="img" aria-hidden="true"></i>
      </span>
    </section>
  );
};

export default Portfolio;
