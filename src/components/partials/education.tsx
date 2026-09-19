import { Section } from "@/components/common";
import { ShowMore } from "@/components/common/show-more";
import { TimelineItem } from "@/components/common/timeline-item";

export const EducationSection = () => {
  return (
    <Section title="Education" sectionId="education">
      <TimelineItem
        period="Sep 2026 – Present"
        location="Zürich, Switzerland"
        title="MSc in Computer Science"
        org="ETH Zürich"
        orgUrl="https://ethz.ch"
      >
        <ul>
          <li>Major: Machine Intelligence</li>
          <li>Minor: Data Management Systems</li>
        </ul>
      </TimelineItem>
      <TimelineItem
        period="Sep 2023 – Jul 2026"
        location="Eindhoven, Netherlands"
        title="BSc in Computer Science and Engineering"
        org="Eindhoven University of Technology"
        orgUrl="https://tue.nl"
      >
        <ul>
          <li>Graduated <em>Cum Laude</em></li>
          <li>
            Bachelor Thesis: <em>Explainable RF Fingerprinting: a Systematic Evaluation of Explainable Spectrogram-Based RFFI</em>
            <p className="mt-1">
              Reproduced and evaluated two machine learning pipelines for Radio Frequency Fingerprint
              Identification (RFFI), and performed a partial ablation study to better understand
              the source of the misconfiguration.
            </p>
          </li>
        </ul>
      </TimelineItem>
      <ShowMore count={10}>
        <TimelineItem
          period="Sep 2020 – May 2022"
          location="Roncade, Italy"
          title="International Baccalaureate Diploma"
          org="International School of Talents - Multicampus"
          orgUrl="https://schools.h-farm.com/venice/"
        >
          <p>Final score: 40 (+1 extra core point). Subjects taken:</p>
          <ul>
            <li>Higher Level Mathematics Analysis and Approaches (6 out of 7)</li>
            <li>Higher Level Physics (7 out of 7)</li>
            <li>Higher Level Computer Science (7 out of 7)</li>
            <li>Economics (6 out of 7)</li>
            <li>Spanish B (7 out of 7)</li>
            <li>English A Language and Literature (6 out of 7)</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          period="Sep 2018 – Jun 2020"
          location="Roncade, Italy"
          title="IB Middle Years Program (High School grades 9 and 10)"
          org="H-Farm International School - Treviso"
          orgUrl="https://schools.h-farm.com/venice/"
        />
        <TimelineItem
          period="Jul 2023"
          location="Oxford, UK"
          title="Physics (Summer Camp)"
          org="Oxford Summer Courses"
          orgUrl="https://oxfordsummercourses.com"
        >
          <p>
            Explored the applications of physics in medicine, including imaging
            techniques such as X-rays, CT scans, SPECT, MRIs and PET scans.
          </p>
          <p>
            I independently implemented a SPECT scanner simulation, together with
            a collimator grid that filters out results not hitting the detector at
            a proper angle, using Python and Google Colab for the data analysis.
            The simulation can be found{" "}
            <a href="https://github.com/jackpeck2004/SPECT_scanner_simulation" target="_blank">
              here
            </a>
            .
          </p>
          <p>
            Topics covered: waves, particle physics, radioactivity,
            electromagnetism, and an introduction to special relativity.
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1wG_8PDvZSA_lLhZ1trzj-i-_O918-YIq/view?usp=sharing"
              target="_blank"
            >
              Reference letter
            </a>
          </p>
        </TimelineItem>
        <TimelineItem
          period="Sep 2021 – Sep 2022"
          title="Leader of the Future"
          org="The European House - Ambrosetti"
          orgUrl="https://leaderdelfuturo.eu"
        >
          <p>Community Member</p>
        </TimelineItem>
        <TimelineItem
          period="Jul 2019 – Aug 2019"
          location="Oxford, UK"
          title="Introduction to Engineering (Summer Camp)"
          org="Oxford Royale Academy"
          orgUrl="https://www.oxford-royale.com/"
        />
        <TimelineItem
          period="May 2017"
          location="Salamanca, Spain"
          title="Curso de Lengua y Conversación"
          org="Enforex"
          orgUrl="https://enforex.es"
        >
          <p>
            Final level: <em>C1</em>. Scored 9/10 in language contents, listening,
            reading, pronunciation and sociocultural understanding; 8/10 in
            vocabulary, spoken and written expression.
          </p>
        </TimelineItem>
        <TimelineItem
          period="Summer 2017"
          title="Special Effects (Adobe After Effects) Summer Camp"
          org="Sparx Camps"
          orgUrl="https://courses.h-farm.com/sparx-summer-camp/"
        />
        <TimelineItem
          period="Summer 2016"
          title="Digital Fabrication Summer Camp"
          org="H-Farm Digital Summer Camps"
          orgUrl="https://courses.h-farm.com/sparx-summer-camp/"
        />
        <TimelineItem
          period="Summer 2015"
          title="Electronics Summer Camp"
          org="Digital Native Summer Camp"
          orgUrl="https://courses.h-farm.com/sparx-summer-camp/"
        />
        <TimelineItem
          period="Summer 2015"
          title="Makers Summer Camp"
          org="Digital Native Summer Camp"
          orgUrl="https://courses.h-farm.com/sparx-summer-camp/"
        />
      </ShowMore>
    </Section>
  );
};
