import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black mt-32 h-32 text-gray-400 flex flex-col justify-center">
      <div className="container mx-auto">
        <div></div>
        <p className="text-center">©{new Date().getFullYear()} Giacomo Pasin</p>
      </div>
    </footer>
  );
};

export default Footer;
