import { Layout as ALayout } from "antd";
import React from "react";
//@ts-ignore
import SEO from "../components/seo";
import "../styles/App.scss";

const { Footer, Content } = ALayout;

interface LayoutProps {
  children: any;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <SEO title={title} />
      <ALayout className="Layout">
        <Content className="Main">{children}</Content>
        <Footer>© {new Date().getFullYear()} - Giacomo Pasin</Footer>
      </ALayout>
    </div>
  );
};

export default Layout;
