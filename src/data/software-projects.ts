import { ISoftwareProject } from "@/lib/types";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

// export const getSoftwareProjects = async () => {
//   const directoryPath = "_content/software-projects";
//   const softwareProjects = await fs.readdir(directoryPath);
//
//   return Promise.all(
//     softwareProjects
//       .map(async (file) => {
//         const filePath = path.join("_content/software-projects", file);
//         const content = await fs.readFile(filePath, "utf-8");
//         
//
//         const { data } = matter(content);
//
//         if (data.published) {
//           return data as ISoftwareProject;
//         }
//
//         return null;
//       })
//   );
//
// };
//
//
function convertToDate(date: string) {
  const [month, year] = date.split('/');
  
  // JavaScript months are 0-indexed, so we subtract 1 from the month
  return new Date(parseInt(year), parseInt(month) - 1, 1);
}

export const getSoftwareProjects = async (): Promise<ISoftwareProject[]> => {
  const directoryPath = "_content/software-projects";
  const softwareProjects = await fs.readdir(directoryPath);

  const projects = await Promise.all(
    softwareProjects.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      const content = await fs.readFile(filePath, "utf-8");

      const { data } = matter(content);

      if (data.published) {
        return data as ISoftwareProject;
      }

      return null;
    })
  );

  // Filter out null values
  const filteredProjects = projects.filter(
    (project): project is ISoftwareProject => project !== null
  );

  // Sort projects by the "date" property
  filteredProjects.sort((a, b) => convertToDate(b.date).getTime() - convertToDate(a.date).getTime());

  return filteredProjects;
};
