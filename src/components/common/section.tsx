import { FC, PropsWithChildren } from "react";

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
      <section className="mt-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">{title}</h3>
        {children}
      </section>
    );

  return (
    <section className="pt-16 sm:pt-20" id={sectionId}>
      <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
};
