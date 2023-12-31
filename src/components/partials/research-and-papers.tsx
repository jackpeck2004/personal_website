import { Section } from "@/components/common";
import { IResearchPaper } from "@/lib/types";
import Link from "next/link";

export const ResearchAndPapers = ({
	researchPapers,
}: {
	researchPapers: Array<IResearchPaper>;
}) => (
	<Section title="Research and Papers" sectionId="research">
		<div className="mt-[2vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] grid-y-[40px]">
			{researchPapers.sort().map((p: IResearchPaper) => (
				<div
					className="border border-gray-200 rounded p-4 mb-8"
					key={p.title.split(" ").join("-").toLowerCase()}
				>
					<div>
						<h4 className="font-semibold text-xl">
							<span className="text-blue-500">
								{p.subject}:<br />
							</span>{" "}
							{p.title}
						</h4>
						<h6 className="mb-2 text-gray-600">
							{p.date}
							<br />
							{p.scope} - {p.type}
						</h6>
						<div className="pt-2">
							{p.url && (
								<Link href={p.url} className="link" target="_blank">
									Read the {p.type.toLowerCase()}
								</Link>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	</Section>
);
