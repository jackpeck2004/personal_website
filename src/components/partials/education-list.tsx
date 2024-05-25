import { type Education as TEducation } from "@/lib/types";
import { MapPin } from "lucide-astro";
import { useState } from "react";

export function ListEducation({ education }: { education: TEducation[] }) {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div className="my-2">
      {showAll
        ? education.map((ed) => <TEducation {...ed} />)
        : education.slice(0, 3).map((ed) => <TEducation {...ed} />)}
      <button
        onClick={() => setShowAll(!showAll)}
        className="button border-gray-200 md:w-64 sm:w-full mt-4 justify-center"
      >
        Show {showAll ? "Less" : "More"}
      </button>
    </div>
  );
}
function TEducation({ title, institution, startDate, endDate }: TEducation) {
  return (
    <div className="w-full border border-grary-200 rounded my-4 min-h-32 flex py-4 px-4">
      <img
        src={institution.logoUrl}
        className="w-24 h-24 object-contain"
        style={!!institution.bg ? { backgroundColor: institution.bg } : {}}
      />
      <div className="ml-8">
        <h3
          className={`font-bold text-3xl`}
          style={{ color: institution.color }}
        >
          {title}
        </h3>
        <h4
          className={`text-2xl font-bold`}
          style={{ color: institution.color }}
        >
          <a href={institution.url} target="_blank">
            {institution.name}
          </a>
        </h4>
        <span className="flex my-2 items-center">
          {/*<MapPin className="w-5 h-5 mr-1" />
           */}
          {institution.location}
        </span>
        <span className="flex my-2 items-center">
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
}
