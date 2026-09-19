import { Section } from "@/components/common";
import { ShowMore } from "@/components/common/show-more";
import { TimelineItem } from "@/components/common/timeline-item";

const LEADER_OF_THE_FUTURE = "Leader of the Future (The European House - Ambrosetti)";
const LEADER_OF_THE_FUTURE_URL = "https://www.leaderdelfuturo.eu/";

export const ConferencesSection = () => {
  return (
    <Section title="Conferences and Seminars" sectionId="conferences">
      <TimelineItem
        period="Aug 2022"
        location="Geneva, Switzerland"
        title="Geneva: a look at the future between leadership and innovation"
        org={LEADER_OF_THE_FUTURE}
        orgUrl="https://www.leaderdelfuturo.eu/incontri/view/9157"
      >
        <p>
          During two and a half days in Geneva, the community of the
          &quot;Leaders of the Future&quot; visited and interacted with global
          organisations, discussing with their members how they envision the
          future of their field and of the planet: CERN, the United Nations,
          Campus Biotech and ST Microelectronics.
        </p>
      </TimelineItem>
      <ShowMore count={2}>
        <TimelineItem
          period="Apr 2022"
          location="Cernobbio (CO), Italy"
          title="The scenario of the economy and finance"
          org={LEADER_OF_THE_FUTURE}
          orgUrl={LEADER_OF_THE_FUTURE_URL}
        >
          <p>
            Young managers and entrepreneurs discussed the current state of
            finance, leadership, career growth and the economy with leading
            experts in the fields.
          </p>
        </TimelineItem>
        <TimelineItem
          period="Sep 2021"
          location="Cernobbio (CO), Italy"
          title="The scenario of today and tomorrow for competitive strategies"
          org={LEADER_OF_THE_FUTURE}
          orgUrl="https://www.leaderdelfuturo.eu/incontri/view/9127"
        >
          <p>
            An event reserved for young managers and entrepreneurs to listen to
            and debate with global leaders and experts about how they envision
            the future of the world and of business.
          </p>
        </TimelineItem>
      </ShowMore>
    </Section>
  );
};
