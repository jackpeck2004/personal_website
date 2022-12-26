import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { LineDivider } from "@/components/common";

interface IEducationProps {
  startDate: string;
  endDate: string;
  city?: string;
  title: string;
  school: string;
  schoolUrl: string;
}

export const Education: FC<PropsWithChildren<IEducationProps>> = ({
  startDate,
  endDate,
  city,
  title,
  school,
  schoolUrl,
  children
}) => {
  return (
    <div className="py-4 ">
      <span className="block text-gray-400 uppercase">
        {startDate} – {endDate}
      </span>
      {city && <span className="block text-gray-400">{city}</span>}
      <span className="text-2xl">
        <h4 className="font-bold inline">{title} – </h4>
        <Link href={schoolUrl} passHref>
          <a className="link" target={"_blank"}>
            {school}
          </a>
        </Link>
      </span>
      <LineDivider />
      {children}
      <p className="pt-4 truncate">
        <span className="font-bold">Website </span>
        <Link href={schoolUrl} passHref>
          <a className="link" target={"_blank"}>
            {schoolUrl}
          </a>
        </Link>
      </p>
    </div>
  );
};
