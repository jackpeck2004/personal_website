import { Section } from "@/components/common";
import { ShowMore } from "@/components/common/show-more";
import { ResumeTimelineItems } from "@/components/common/resume-timeline-items";
import education from "@/data/education.json";

export const EducationSection = () => (
  <Section title="Education" sectionId="education">
    <ResumeTimelineItems entries={education.slice(0, 2)} />
    <ShowMore count={10}>
      <ResumeTimelineItems entries={education.slice(2)} />
    </ShowMore>
  </Section>
);
