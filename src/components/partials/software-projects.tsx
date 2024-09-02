import { Section } from "@/components/common";
import { getSoftwareProjects } from "@/data/software-projects";
import { SoftwareProjectCard } from "./software-project-card";

export async function SoftwareProjects () {
    const projects = await getSoftwareProjects();

  return (
    <Section title="Software" subsection>
      <div className="mt-[2vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] grid-y-[40px]">
        {projects &&
          projects.map((project, idx) => {
            return (
              <SoftwareProjectCard
                key={idx}
                title={project.title}
                languages={project.languages}
                frameworks={project.frameworks}
                description={project.description}
                live={project.live && project.live}
                github={project.github && project.github}
                date={project.date}
              />
            );
          })}
      </div>
    </Section>
  );
};
