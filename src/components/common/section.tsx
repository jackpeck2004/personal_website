import { FC, PropsWithChildren } from "react";
import { LineDivider } from "./line-divider";

interface ISectionProps {
  title: string;
  sectionId?: string;
  subsection?: boolean;
}

export const Section: FC<PropsWithChildren<ISectionProps>> = ({
  title,
  sectionId,
  subsection,
  children
}) => {
  if (subsection)
    return (
      <section className="my-8" id={sectionId}>
        <h2 className="text-3xl">{title}</h2>
        <LineDivider />
        {children}
      </section>
    );

  return (
    <section className="mt-[10vh]" id={sectionId}>
      <h2 className="text-5xl">{title}</h2>
      {children}
    </section>
  );
};
