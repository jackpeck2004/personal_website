import React from 'react';
import Meta from './meta';
import Topbar from './navbar';

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Topbar />
      {pageTitle ? <Meta pageTitle={pageTitle} /> : <Meta />}
      <div>
        <main>{children}</main>
      </div>
      {/* Footer */}
    </>
  );
};

export default Layout;
