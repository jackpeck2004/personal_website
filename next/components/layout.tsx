import React from "react";
import Meta from "./meta";

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      {pageTitle ? <Meta pageTitle={pageTitle} /> : <Meta />}
      <div>
        <main>{children}</main>
      </div>
      {/* Footer */}
    </>
  );
};

export default Layout;
