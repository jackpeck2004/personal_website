import { CaretRightFilled } from "@ant-design/icons";
import React from "react";
import "../styles/Sidebar.scss";
//@ts-ignore
import { Links } from "./Menu";


const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  if (collapsed) return null

  return (
    <div className='Sidebar'>
      <button onClick={() => setCollapsed(!collapsed)}>
        <CaretRightFilled />
      </button>
      <h1>Giacomo Pasin</h1>
      <Links />
    </div>
  );
}

export default Sidebar
