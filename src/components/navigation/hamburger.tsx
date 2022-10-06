import Button from "@/components/common/button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState, useEffect, FC, PropsWithChildren } from "react";
import { Link } from "react-scroll";

const iconStyle = { width: "2rem", height: "2rem" };

/*
const View = styled.div`
  background: black;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  overflow: hidden;
  color: white;
  padding: 1vw;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vw;
  font-size: ${(props) => props.theme.textSizes.lg};
`;

const Anchor = styled.a`
  margin: 0 15px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const Bar = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBackground};
  color: ${(props) => props.theme.colors.primary};
  padding: 1vh 1vw;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
`;
*/

export const Anchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <a className="mx-[15px] cursor-pointer text-inherit decoration-none">{children}</a>
  );
}

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
