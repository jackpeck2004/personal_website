import { FC } from "react";
import { ICharacteristic } from "@/lib/types";

export const Characteristic: FC<ICharacteristic> = ({ title, description }) => {
  return (
    <div className="border-t-4 border-gray-200">
      <h3 className="lg:text-3xl font-semibold mt-[10px]">{title}</h3>
      <span>{description}</span>
    </div>
  );
}

export const Characteristics: FC<{characteristics: Array<ICharacteristic>}> = ({characteristics}) => {
  return (
    <div className="mt-[5vh] grid grid-cols-3 gap-x-[40px]">
      {characteristics.map(({title, description}) => (
        <Characteristic
        key={title}
        title={title}
        description={description}
        />
      ))}
    </div>
  );
}

