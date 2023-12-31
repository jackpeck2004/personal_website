import { LineDivider, Section } from "@/components/common";
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

const Experience: FC<PropsWithChildren<IExperienceProps>> = ({
	startDate,
	endDate,
	city,
	role,
	company,
	companyUrl,
	children,
}) => {
	return (
		<div className="py-4">
			<span className="block text-gray-400 uppercase">
				{startDate} – {endDate}
			</span>
			<span className="block text-gray-400">{city}</span>
			<span className="text-2xl">
				<h4 className="font-bold inline">{role} – </h4>
				<Link href={companyUrl} className="link" target={"_blank"}>
					{company}
				</Link>
			</span>
			<LineDivider />
			<div className="prose text-black max-w-none">{children}</div>
		</div>
	);
};

export const WorkExperienceSection = () => {
	return (
		<Section title="Work Experience" sectionId="experience">
			<Experience
				startDate="8 Aug 2021"
				endDate="current"
				city="Treviso, Italy"
				role="CTO"
				company="T.W.I.N srl"
				companyUrl="https://twin.services"
			>
				<p>
					Upgrade existing technology infrastructures, organize digital
					permissions and update programs to adhere to GDPR and privacy
					standards, handle setup and maintenance of software platforms and
					integrate new technologies into the workflow of the company to enhance
					productivity of employees. Design, build and deploy the{" "}
					<a href="https://twin.services" target="_blank" rel="noreferrer">
						latest company website
					</a>
					, as well as custom internal tooling.
				</p>
			</Experience>
			<Experience
				startDate="4 Sept 2019"
				endDate="8 Aug 2021"
				city="Treviso, Italy"
				role="Junior Technology and Web Designer"
				company="T.W.I.N srl"
				companyUrl="https://twin.services"
			>
				<p>
					Organize new network infrastructures and secure file sharing options,
					setting up Google Workspace for the whole company, configure new
					domains and website addresses, create software platforms, website
					designs and design algorithms to simplify the workflows of other
					employees.
				</p>
			</Experience>
		</Section>
	);
};
