import ProjectCard from "@/components/cards/ProjectCard";
import TerminalCard from "@/components/cards/TerminalCard";
// import { Projects } from "@/mockup/data";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const text = useTranslations("Portfolio");
  const keys = ["project1", "project2", "project3", "project4", "project5"];

  return (
    <div className="flex flex-col gap-48 xl:gap-2 mx-2 sm:mx-32 md:mx-80 mt-48">
      {keys.map((key) => (
        <div
          key={key}
          className={`flex ${
            parseInt(text(`${key}.id`)) % 2 !== 0
              ? "xl:justify-start"
              : "xl:justify-end"
          }`}
        >
          <ProjectCard
            key={text(`${key}.id`)}
            name={text(`${key}.name`)}
            description={text(`${key}.description`)}
            url={text(`${key}.url`)}
            img={text(`${key}.img`)}
            tech1={text(`${key}.tech1`)}
            tech2={text(`${key}.tech2`)}
            tech3={text(`${key}.tech3`)}
            tech4={text(`${key}.tech4`)}
          />
        </div>
      ))}
      <div className="mt-12 lg:mt-48 text-center">
        <TerminalCard />
      </div>
    </div>
  );
};

export default Portfolio;
