import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export interface BlogPostMeta {
    title: string;
    date: string;
    slug: string;
}

// async function fileExists(file: string): Promise<boolean> {
//     let flag = true;
//
//     try {
//         await fs.access(file, fs.constants.F_OK);
//     } catch (error) {
//         flag = false;
//     }
//
//     return flag;
// }

export const getBlogPosts = async (): Promise<any> => {
  const directoryPath = "src/app/blog/(posts)";
  const blogPosts = await fs.readdir(directoryPath);

  const blogPostsMeta = await Promise.all(
    blogPosts.filter((folder) => !folder.includes('.')).map(async (folder) => {
          const filePath = path.join(directoryPath, folder, 'page.mdx');
              const content = await fs.readFile(filePath, "utf-8");
              const url = `/blog/${folder}`;
    
              const { data } = matter(content);
    
              return {
                  url,
                  ...data
              };
        })
  );

  console.log(blogPostsMeta)

  // // Filter out null values
  // const filteredProjects = projects.filter(
  //   (project): project is ISoftwareProject => project !== null
  // );
  //
  // // Sort projects by the "date" property
  // filteredProjects.sort((a, b) => convertToDate(b.date).getTime() - convertToDate(a.date).getTime());
  //
  // return filteredProjects;
  return blogPostsMeta
};
