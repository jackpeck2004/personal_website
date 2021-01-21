/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';
import '../styles/Menu.scss';
import MobileMenu from './MobileMenu';
//@ts-ignore
import HamburgerIcon from '../assets/hamburger.svg';
//@ts-ignore
import CrossIcon from '../assets/cross.svg';

const st = (target: string) => {
  scrollTo(target, 'start');
};

export const Links: React.FC = () => (
  <nav>
    <ul className="nav__links">
      <li>
        <a className="nav_link" onClick={() => st('.Home')}>
          Home
        </a>
      </li>
      <li>
        <a className="nav_link" onClick={() => st('#projects')}>
          About
        </a>
      </li>
      <li>
        <a className="nav_link" onClick={() => st('.projects')}>
          Projects
        </a>
      </li>
      <li>
        <a className="nav_link" onClick={() => st('.contactFormSection')}>
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

const Menu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="menu">
      <div className="left logo">
        <a onClick={() => st('.Home')}>Giacomo Pasin</a>
      </div>
      <div className="right">
        <div className="mobile">
          <button
            className={`${openMenu ? 'fixed' : ''}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <HamburgerIcon className="icon" />
            ) : (
              <CrossIcon className="icon" />
            )}
          </button>
          {openMenu && (
            <MobileMenu onClick={() => setOpenMenu(!openMenu)} Links={Links} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
