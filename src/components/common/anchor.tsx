export const NavAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <a className="mx-[15px] cursor-pointer text-inherit decoration-none">{children}</a>
  );
}

export const Anchor = ({ children, href, target }) => {
  return (
    <a className="text-blue-500 pr-4 cursor-pointer" href={href} target={target}>{children}</a>
  );
}
