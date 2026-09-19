import { getSoftwareProjects } from "@/data/software-projects";
import { ShowMore } from "@/components/common/show-more";
import { SoftwareProjectGrid } from "./software-project-grid";

export async function SoftwareProjects () {
    const projects = await getSoftwareProjects();
    const featured = projects.filter((project) => project.featured);
    const others = projects.filter((project) => !project.featured);

  return (
    <>
      <SoftwareProjectGrid projects={featured} />
      {others.length > 0 && (
        <ShowMore count={others.length}>
          <SoftwareProjectGrid projects={others} className="pt-4" />
        </ShowMore>
      )}
    </>
  );
};
