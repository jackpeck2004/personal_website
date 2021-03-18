import React from 'react';
import { SITE_NAME } from '../lib/constants';
//import Scroller from "./scroller"

const Topbar: React.FC = () => {
  return (
    <>
      <div className="h-20 flex items-center">
        <div className="container mx-auto">
          <a href="/" className="uppercase font-title font-bold text-2xl">
            {SITE_NAME}
          </a>
        </div>
      </div>
      {/*<Scroller />*/}
    </>
  );
};

export default Topbar;
