import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Anchor } from "@/components/common";

interface IEducationProps {
    startDate: string;
    endDate: string;
    city?: string;
    title: string;
    school: string;
    schoolUrl: string;
}

const LineDivider = () => (
    <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
        </div>
    </div>
);

export const Education: FC<PropsWithChildren<IEducationProps>> = ({ startDate, endDate, city, title, school, schoolUrl, children }) => {
    return (
        <div className="py-4">
            <span className="block text-gray-400 uppercase">{startDate} – {endDate}</span>
            {city && <span className="block text-gray-400">{city}</span>}
            <span className="text-2xl"><h4 className="font-bold inline">{title} – </h4><Link href={schoolUrl} passHref><Anchor target="_blank">{school}</Anchor></Link></span>
            <LineDivider />
            {children}
            <p className="pt-4"><span className="font-bold">Website </span><Link href={schoolUrl} passHref><Anchor target="_blank">{schoolUrl}</Anchor></Link></p>
        </div>
    );
}
