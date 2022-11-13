import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface IExperienceProps {
  startDate: string;
  endDate: string;
  city: string;
  role: string;
  company: string;
  companyUrl: string;
}

const LineDivider = () => (
  <div className="relative py-4">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-b border-gray-300"></div>
    </div>
  </div>
);

export const Experience: FC<PropsWithChildren<IExperienceProps>> = ({
  startDate,
  endDate,
  city,
  role,
  company,
  companyUrl,
  children
}) => {
  return (
    <div className="py-4">
      <span className="block text-gray-400 uppercase">
        {startDate} – {endDate}
      </span>
      <span className="block text-gray-400">{city}</span>
      <span className="text-2xl">
        <h4 className="font-bold inline">{role} – </h4>
        <Link href={companyUrl} passHref>
          <a className="text-blue-500 pr-4 cursor-pointer" target={"_blank"}>
            {company}
          </a>
        </Link>
      </span>
      <LineDivider />
      {children}
    </div>
  );
};
