import { FC } from "react";
import { ISoftwareProject } from "@/lib/types";
import { cn } from "@/lib/helpers";
import { SoftwareProjectCard } from "./software-project-card";

export const SoftwareProjectGrid: FC<{ projects: ISoftwareProject[]; className?: string }> = ({ projects, className }) => (
  <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
    {projects.map((project, idx) => (
      <SoftwareProjectCard
        key={idx}
        title={project.title}
        languages={project.languages}
        frameworks={project.frameworks}
        description={project.description}
        live={project.live}
        github={project.github}
        date={project.date}
      />
    ))}
  </div>
);
