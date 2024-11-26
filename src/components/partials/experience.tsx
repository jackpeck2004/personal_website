import { Section } from "@/components/common";
import { Experience } from "./experience-card";

export const WorkExperienceSection = () => {
  return ( <Section title="Work Experience" sectionId="experience">
      <Experience
        startDate="8 Aug 2021"
        endDate="current"
        city="Treviso, Italy"
        role="CTO"
        company="T.W.I.N srl"
        companyUrl="https://twin.services"
      >
        <p>
          Upgrade existing technology infrastructures, organize digital
          permissions and update programs to adhere to GDPR and privacy
          standards, handle setup and maintenance of software platforms and
          integrate new technologies into the workflow of the company to enhance
          productivity of employees. Design, build and deploy the{" "}
          <a href="https://twin.services" target="_blank">
            latest company website
          </a>
          , as well as custom internal tooling.
        </p>
      </Experience>
      <Experience
        startDate="04 Nov 2024"
        endDate="current"
        city="Eindhoven, Netherlands"
        role="Foundations of Data Analytics Development Team"
        company="TU Eindhoven"
        companyUrl="https://tue.nl"
      >
        <p>
            Building jupyter notebooks test frames and exercises for the course &quot;Foundations of Data Analytics&quot;.
            It involved:
                <ul className="list-disc list-inside">
                    <li>Testing exercises and notebooks by writing the exercises</li>
                    <li>Writing test cases for the 1000+ student submissions</li>
                    <li>Weekly meetings with Professors and the Foundations of Data Analytics course team</li>
                </ul>
        </p>
      </Experience><Experience
        startDate="03 Sep 2024"
        endDate="04 Nov 2024"
        city="Eindhoven, Netherlands"
        role="Calculus Teacher Assistant"
        company="TU Eindhoven"
        companyUrl="https://tue.nl"
      >
        <p>
            Conducted weekly tutoring sessions for first-year bachelor students for the cource &quot;Calculus&quot;.
            It involved:
                <ul className="list-disc list-inside">
                    <li>Teaching a group of over 15 students</li>
                    <li>Providing feedback on the students&#39; work and weekly homework</li>
                    <li>Correcting midterm and final exams</li>
                    <li>Create LaTeX/Beamer presentations</li>
                </ul>
        </p>
      </Experience>
      <Experience
        startDate="4 Sept 2019"
        endDate="8 Aug 2021"
        city="Treviso, Italy"
        role="Junior Technology and Web Designer"
        company="T.W.I.N srl"
        companyUrl="https://twin.services"
      >
        <p>
          Organize new network infrastructures and secure file sharing options,
          setting up Google Workspace for the whole company, configure new
          domains and website addresses, create software platforms, website
          designs and design algorithms to simplify the workflows of other
          employees.
        </p>
      </Experience>
    </Section>
  );
};
