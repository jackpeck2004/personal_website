import { Section } from "@/components/common";
import { Experience } from "./experience-card";

export const WorkExperienceSection = () => {
  return (
    <Section title="Work Experience" sectionId="experience">
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
