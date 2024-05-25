import { LineDivider, Section } from "@/components/common";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface IConferenceProps {
  startDate: string;
  endDate: string;
  location: string;
  name: string;
  url?: string;
  organizer?: {
    name: string;
    url: string;
  };
}

const Conference: FC<PropsWithChildren<IConferenceProps>> = ({
  startDate,
  endDate,
  location,
  name,
  url,
  organizer,
  children,
}) => {
  return (
    <div className="py-4">
      <span className="block text-gray-400 uppercase">
        {startDate} – {endDate}
      </span>
      <span className="block text-gray-400">{location}</span>
      <span className="text-2xl">
        <h4 className="font-bold inline">
          {name}
          {organizer && " - "}
        </h4>
        {organizer && (
          <Link href={organizer.url} className="link" target={"_blank"}>
            {organizer.name}
          </Link>
        )}
      </span>
      <LineDivider />
      <div className="prose text-black max-w-none">{children}</div>
      {url && (
        <Link href={url} className="link" target={"_blank"}>
          {url}
        </Link>
      )}
    </div>
  );
};

export const ConferencesSection = () => {
  return (
    <Section title="Conferences and Seminars" sectionId="conferences">
      <Conference
        startDate="4 SEP 2021"
        endDate="5 SEP 2021"
        location="Villa D'Este Via Regina, 40 - 22012 Cernobbio (CO), Italy"
        name="The scenario of today and tomorrow for competitive strategies"
        url="https://www.leaderdelfuturo.eu/incontri/view/9127"
        organizer={{
          name: "Leader of the Future (The European House - Ambrosetti)",
          url: "https://www.leaderdelfuturo.eu/",
        }}
      >
        <p>
          During this event reserved for young managers and entrepreneurs,
          participants are able to listen to speeches and debate with global
          leaders and experts of various fields regarding how they envision the
          future of the world and of business.
        </p>
      </Conference>
      <Conference
        startDate="1 APR 2022"
        endDate="1 APR 2022"
        location="Villa D'Este Via Regina, 40 - 22012 Cernobbio (CO), Italy"
        name="The scenario of the economy and finance"
        url="https://www.leaderdelfuturo.eu/incontri/view/9127"
        organizer={{
          name: "Leader of the Future (The European House - Ambrosetti)",
          url: "https://www.leaderdelfuturo.eu/",
        }}
      >
        <p>
          Throughout the day, young managers and entrepreneurs have the
          opportunity to discuss the topics of the current state of finance,
          leadership, career growth and the economy with leading experts in the
          fields.
        </p>
      </Conference>
      <Conference
        startDate="7 AUG 2022"
        endDate="9 AUG 2022"
        location="Geneva, Switzerland"
        name="Geneva: a look at the future between leadership and innovation"
        url="https://www.leaderdelfuturo.eu/incontri/view/9157"
        organizer={{
          name: "Leader of the Future (The European House - Ambrosetti)",
          url: "https://www.leaderdelfuturo.eu/",
        }}
      >
        <div>
          <p>
            During this two and a half days in Geneva, the community of the
            &quot;Leaders of the Future&quot; had the opportunity to visit and
            interact with global level organisations and discuss with their
            members how they envision the future of their field and in general
            the planet.
          </p>
          <ul>
            <li>CERN (European Organization for Nuclear Research)</li>
            <li>United Nations</li>
            <li>Campus Biotech</li>
            <li>ST Microelectronics</li>
          </ul>
        </div>
      </Conference>
    </Section>
  );
};
