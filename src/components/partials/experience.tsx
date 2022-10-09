import { FC, PropsWithChildren } from "react";
import { Anchor } from "@/components/common"

interface IExperienceProps {
    startDate: string;
    endDate: string;
    city: string;
    role: string;
    company: string;
}

const LineDivider = () => (
    <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
        </div>
    </div>
);

export const Experience: FC<PropsWithChildren<IExperienceProps>> = ({ startDate, endDate, city, role, company, children }) => {
    return (
        <div className="pt-4">
            <span className="block text-gray-400 uppercase">{startDate} – {endDate}</span>
            <span className="block text-gray-400">{city}</span>
            <span className="text-2xl"><h4 className="font-bold inline">{role} – </h4><Anchor>{company}</Anchor></span>
            <LineDivider />
            {children}
        </div>
    );
}