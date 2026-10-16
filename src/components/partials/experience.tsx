import { Section } from "@/components/common";
import { ShowMore } from "@/components/common/show-more";
import { ResumeTimelineItems } from "@/components/common/resume-timeline-items";
import experience from "@/data/experience.json";

export const WorkExperienceSection = () => (
  <Section title="Work Experience" sectionId="experience">
    <ResumeTimelineItems entries={experience.slice(0, 3)} />
    <ShowMore count={2}>
      <ResumeTimelineItems entries={experience.slice(3)} />
    </ShowMore>
  </Section>
);
