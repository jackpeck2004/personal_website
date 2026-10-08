import { IResearchPaper } from "@/lib/types";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export const getResearchPapers = async (): Promise<IResearchPaper[]> => {
  const directoryPath = "_content/research-and-papers";
  const files = await fs.readdir(directoryPath);

  const papers = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(directoryPath, file), "utf-8");
      const { data } = matter(content);

      return data.published ? (data as IResearchPaper) : null;
    })
  );

  return papers.filter((paper): paper is IResearchPaper => paper !== null);
};
