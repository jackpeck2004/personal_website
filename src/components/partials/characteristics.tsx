import { CHARACTERISTICS } from "@/lib/contents";
import { Characteristic } from "./characteristic-card";

export function Characteristics() {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
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
