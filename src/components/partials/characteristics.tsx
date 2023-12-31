import { FC } from "react";
import { ICharacteristic } from "@/lib/types";
import { Link } from "react-scroll";
import { Anchor } from "@/components/common";

export const Characteristic: FC<ICharacteristic> = ({
  title,
  description,
  sectionLinkId
}) => {
  return (
    <div className="border-t-4 border-gray-200">
      <h3 className="lg:text-3xl font-semibold mt-[10px]">{title}</h3>
      <p>{description}</p>
      {sectionLinkId && (
        <Link to={sectionLinkId} smooth spy offset={-70} className="link"> 
          Read more
        </Link>
      )}
    </div>
  );
};

export const Characteristics: FC<{ characteristics: Array<ICharacteristic> }> =
  ({ characteristics }) => {
    return (
      <div className="mt-[5vh] grid md:grid-cols-3 gap-x-[40px]">
        {characteristics.map(({ title, description, sectionLinkId }) => (
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
