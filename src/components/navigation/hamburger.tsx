import { NavAnchor as Anchor, Button } from "@/components/common";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const iconStyle = { width: "2rem", height: "2rem" };

const MenuView = ({ setNavbarOpen }) => {
  let pos = [];

  useEffect(() => {
    pos = [window.scrollX, window.scrollY];
  });

  return (
    <div className="bg-black fixed h-screen w-screen z-[50] overflow-hidden text-white p-[1vw]">
      <Button circular border>
        <XIcon
          style={{ ...iconStyle, color: "white" }}
          onClick={() => {
            setNavbarOpen(false);
            window.scroll(pos[0], pos[1]);
          }}
        />
      </Button>
      <ul className={`flex flex-col justify-evenly items-center h-[50vw] text-3xl`}>
        <Link to="home" smooth spy onClick={() => setNavbarOpen(false)}>
          <Anchor>Home</Anchor>
        </Link>
        <Link to="projects" smooth spy onClick={() => setNavbarOpen(false)}>
          <Anchor>Projects</Anchor>
        </Link>
      </ul>
    </div>
  );
};

const HamburgerNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  if (navbarOpen) {
    return <MenuView setNavbarOpen={setNavbarOpen} />;
  }

  return (
    <div className="bg-white text-black py-[1vh] px-[1vw] w-full sticky top-0 z-10">
      <Button circular border>
        <MenuIcon style={iconStyle} onClick={() => setNavbarOpen(true)} />
      </Button>
    </div>
  );
};

export default HamburgerNavbar;
