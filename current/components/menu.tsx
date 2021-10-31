import React from 'react';
import { Link } from 'react-scroll';
import { FixedLengthArray } from '../lib/types';

interface ScrollLink {
  anchor: string;
  desc: string;
}

const Menu: React.FC = () => {
  const links: FixedLengthArray<ScrollLink, 2> = [
    {
      anchor: 'contact',
      desc: 'contact',
    },
    {
      anchor: 'projects',
      desc: 'projects',
    },
  ];

  return (
    <div
      className="fixed transform -rotate-90 top-64 -right-16 2xl:right-0 uppercase flex flex-row-reversed w-48 justify-between">
      {links &&
      links.map((link: ScrollLink, idx: number) => (
        <Link
          className="cursor-pointer"
          to={link.anchor}
          smooth={true}
          spy={true}
          key={idx}
        >
          {link.desc}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
