import { Fragment } from "react";
import { TimelineItem } from "@/components/common/timeline-item";

type Entry = {
  period: string;
  location?: string;
  title: string;
  org?: string;
  orgUrl?: string;
  details: (string | string[])[];
};

// Render emphasis and links from shared data without embedding HTML.
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g).map((part, index) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link)
          return (
            <a key={index} href={link[2]} target="_blank" rel="noreferrer">
              {link[1]}
            </a>
          );
        if (part.startsWith("*") && part.endsWith("*"))
          return <em key={index}>{part.slice(1, -1)}</em>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export function ResumeTimelineItems({ entries }: { entries: Entry[] }) {
  return (
    <>
      {entries.map(({ details, ...entry }) => (
        <TimelineItem key={`${entry.title}-${entry.period}`} {...entry}>
          {details.length
            ? details.map((detail, index) =>
                Array.isArray(detail) ? (
                  <ul key={index}>
                    {detail.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={index}>
                    <RichText text={detail} />
                  </p>
                )
              )
            : null}
        </TimelineItem>
      ))}
    </>
  );
}
