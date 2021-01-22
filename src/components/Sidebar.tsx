import { CaretRightFilled } from "@ant-design/icons";
import React from "react";
import "../styles/Sidebar.scss";
//@ts-ignore
import { Links } from "./Menu";

interface SidebarProps {
  initCollapsed: boolean;
}

export let openSidebar: React.Dispatch<React.SetStateAction<boolean>>;
export let sidebarState: boolean;

const Sidebar: React.FC<SidebarProps> = ({ initCollapsed }) => {
  const [collapsed, setCollapsed] = React.useState(initCollapsed);

  openSidebar = setCollapsed;
  sidebarState = collapsed;

  if (collapsed) return null;

  return (
    <div className="Sidebar">
      <button onClick={() => setCollapsed(!collapsed)}>
        <CaretRightFilled />
      </button>
      <h1>Giacomo Pasin</h1>
      <Links />
    </div>
  );
};

export default Sidebar;
