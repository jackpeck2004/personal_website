import React from 'react';
import { SITE_NAME } from '../lib/constants';
//import Scroller from "./scroller"

const Topbar: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      //@ts-ignore
      (!'theme' in localStorage &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark');
    } else if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme == 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="h-20 flex items-center">
        <div className="container mx-auto flex justify-between">
          <a href="/" className="uppercase font-semibold text-2xl">
            {SITE_NAME}
          </a>
          <div>
            <button onClick={() => toggleDark()}>
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
      {/*<Scroller />*/}
    </>
  );
};

export default Topbar;
