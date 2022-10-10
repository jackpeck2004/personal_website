import { FC, PropsWithChildren } from "react";

export const NavAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <a className="mx-[15px] cursor-pointer text-inherit decoration-none">{children}</a>
  );
}


export const Anchor: FC<PropsWithChildren<{ target?: string }>> = ({ children, target }) => {
  return (
    <a className="text-blue-500 pr-4 cursor-pointer" target={target}>{children}</a>
  );
}
