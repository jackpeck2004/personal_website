import React from 'react';

interface IProps {
  Links: React.FC;
  onClick: () => void;
}

const MobileMenu: React.FC<IProps> = ({ Links, onClick }) => {
  return (
    <div onClick={() => onClick()} className="mobileMenuScreen">
      <Links />
    </div>
  );
};

export default MobileMenu;
