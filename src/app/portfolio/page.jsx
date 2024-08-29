import ProjectCard from "@/components/cards/ProjectCard";
import { Projects } from "@/mockup/data";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-32 xl:gap-2 mx-2 sm:mx-32 md:mx-80 mt-48">
      {Projects.map(
        ({ id, name, description, url, img, tech1, tech2, tech3 }) => (
          <div
            key={id}
            className={`flex ${
              id % 2 !== 0 ? "xl:justify-start" : "xl:justify-end"
            }`}
          >
            <ProjectCard
              key={id}
              name={name}
              description={description}
              url={url}
              img={img}
              tech1={tech1}
              tech2={tech2}
              tech3={tech3}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Portfolio;
