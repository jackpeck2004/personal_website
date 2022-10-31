import { FC, PropsWithChildren } from "react";

interface ISectionProps {
  title: string;
  sectionId?: string;
}

export const Section: FC<PropsWithChildren<ISectionProps>> = ({
  title,
  sectionId,
  children
}) => {
  return (
    <section className="mt-[10vh]" id={sectionId}>
      <h2 className="text-5xl">{title}</h2>
      {children}
    </section>
  );
};
