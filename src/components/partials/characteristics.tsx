import { CHARACTERISTICS } from "@/lib/contents";
import { Characteristic } from "./characteristic-card";

export function Characteristics() {
    return (
      <div className="mt-[5vh] grid md:grid-cols-3 gap-x-[40px]">
        {CHARACTERISTICS.map(({ title, description, sectionLinkId }) => (
          <Characteristic
            key={title}
            title={title}
            description={description}
            sectionLinkId={sectionLinkId}
          />
        ))}
      </div>
    );
  };
