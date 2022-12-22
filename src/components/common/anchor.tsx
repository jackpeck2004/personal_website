import { FC, PropsWithChildren } from "react";

export const NavAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <a className="mx-[15px] cursor-pointer text-inherit decoration-none">
      {children}
    </a>
  );
};

export const Anchor: FC<PropsWithChildren<{ target?: string }>> = ({
  children,
  target
}) => {
  return (
    <a className="link" target={target}>
      {children}
    </a>
  );
};
