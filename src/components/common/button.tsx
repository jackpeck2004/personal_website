import { cn } from "@/lib/helpers";
import { MouseEventHandler, PropsWithChildren, FC } from "react";

interface IButtonProps {
  circular?: boolean;
  border?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

/*
const Button = styled.button`
  background: none;
  padding: 10px;
  border: 1px solid transparent;

  ${(props) => (props.circular ? "border-radius: 250px;" : "")}

  transition: 250ms;

  &:hover {
    border: 1px solid
      ${(props) => (props.border ? props.theme.colors.primary : "transparent")};
  }
`;
*/

export const Button: FC<PropsWithChildren<IButtonProps>> = (props) => {
  return (
    <button
      className={cn(`bg-none p-[10px] border border-transparent ${
        props.circular ? "rounded-full" : ""
      } transition ${props.border ? "hover:border-black" : ""}`, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
