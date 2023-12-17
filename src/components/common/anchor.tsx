import { FC, PropsWithChildren } from "react";

export const NavAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <a className="mx-[15px] cursor-pointer text-inherit decoration-none">
      {children}
    </a>
  );
};
