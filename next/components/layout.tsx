import React from 'react';
import Footer from './footer';
import Menu from './menu';
import Meta from './meta';
import Topbar from './topbar';
import { useMediaQuery } from 'react-responsive';


interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1390px)' });

  return (
    <div className="dark:bg-black dark:text-white">
      <Topbar />
      {!isTabletOrMobile &&
      <Menu />
      }
      {pageTitle ? <Meta pageTitle={pageTitle} /> : <Meta />}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
