import { Section } from "@/components/common";
import { TimelineItem } from "@/components/common/timeline-item";
import { getResearchPapers } from "@/data/research-papers";

export async function ResearchAndPapers() {
  const researchPapers = await getResearchPapers();

  if (researchPapers.length === 0) return null;

  return (
    <Section title="Research and Papers" sectionId="research">
      {researchPapers.map((p) => (
        <TimelineItem
          key={p.url}
          period={p.date}
          location={p.scope}
          title={p.title}
        >
          {p.url && (
            <p>
              <a href={p.url} target="_blank">
                Read the {p.type.toLowerCase()} (PDF)
              </a>
            </p>
          )}
        </TimelineItem>
      ))}
    </Section>
  );
}
