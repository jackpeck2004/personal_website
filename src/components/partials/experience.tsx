import { Section } from "@/components/common";
import { ShowMore } from "@/components/common/show-more";
import { TimelineItem } from "@/components/common/timeline-item";

export const WorkExperienceSection = () => {
  return (
    <Section title="Work Experience" sectionId="experience">
      <TimelineItem
        period="Jun 2026 – Aug 2026"
        location="Pistoia, Italy"
        title="AI Engineering and Software Development Intern"
        org="Mea World"
        orgUrl="https://meaworld.com"
      >
        <p>Summer internship building AI-powered features and internal tooling at an AI transformation company:</p>
        <ul>
          <li>Improved source selection in the RAG pipeline behind Kiuwo, so answers draw on more relevant documents</li>
          <li>Redesigned the layout algorithm that arranges Kiuwo&#39;s mind maps</li>
          <li>Developed an internal AI agent that autonomously resolves the tickets assigned to it and reviews its own output against the original spec</li>
        </ul>
      </TimelineItem>
      <TimelineItem
        period="Aug 2021 – Present"
        location="Treviso, Italy"
        title="CTO"
        org="My Twin Communication"
        orgUrl="https://www.mytwincommunication.com/?utm_source=giacomopasin.com&utm_medium=referral&utm_campaign=personal_website&utm_content=experience_company"
      >
        <p>
          CTO of the corporate and financial communication agency born from the
          merger of T.W.I.N srl and Mymediarelation:
        </p>
        <ul>
          <li>Merged the technological infrastructure of the two companies into a single one</li>
          <li>
            Designed, built and deployed the{" "}
            <a href="https://www.mytwincommunication.com/?utm_source=giacomopasin.com&utm_medium=referral&utm_campaign=personal_website&utm_content=experience_website" target="_blank">
              company website
            </a>
          </li>
          <li>Created new internal tools to streamline the work of every department</li>
          <li>
            Before the merger, upgraded T.W.I.N&#39;s infrastructure, brought
            its systems in line with GDPR and privacy standards, and built
            the{" "}
            <a href="https://twin.services" target="_blank">
              T.W.I.N website
            </a>
          </li>
        </ul>
      </TimelineItem>
      <TimelineItem
        period="Nov 2024 – May 2026"
        location="Eindhoven, Netherlands"
        title="Foundations of Data Analytics Development Team"
        org="TU Eindhoven"
        orgUrl="https://tue.nl"
      >
        <p>Built Jupyter notebook test frames and exercises for the course &quot;Foundations of Data Analytics&quot;:</p>
        <ul>
          <li>Tested exercises and notebooks by solving them</li>
          <li>Wrote test cases for the 1000+ student submissions</li>
          <li>Weekly meetings with professors and the course team</li>
        </ul>
      </TimelineItem>
      <ShowMore count={2}>
        <TimelineItem
          period="Sep 2024 – Nov 2025"
          location="Eindhoven, Netherlands"
          title="Calculus Teacher Assistant"
          org="TU Eindhoven"
          orgUrl="https://tue.nl"
        >
          <p>Ran weekly tutoring sessions for first-year bachelor students in the course &quot;Calculus&quot;:</p>
          <ul>
            <li>Taught a group of over 15 students</li>
            <li>Gave feedback on the students&#39; work and weekly homework</li>
            <li>Graded midterm and final exams</li>
            <li>Created LaTeX/Beamer presentations</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          period="Sep 2019 – Aug 2021"
          location="Treviso, Italy"
          title="Junior Technology and Web Designer"
          org="T.W.I.N srl"
          orgUrl="https://twin.services"
        >
          <p>
            Organize new network infrastructures and secure file sharing options,
            setting up Google Workspace for the whole company, configure new
            domains and website addresses, create software platforms, website
            designs and design algorithms to simplify the workflows of other
            employees.
          </p>
        </TimelineItem>
      </ShowMore>
    </Section>
  );
};
