import React from 'react';
import Footer from './footer';
import Menu from './menu';
import Meta from './meta';
import Topbar from './topbar';

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Topbar />
      <Menu />
      {pageTitle ? <Meta pageTitle={pageTitle} /> : <Meta />}
      <div>
        <main>{children}</main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
