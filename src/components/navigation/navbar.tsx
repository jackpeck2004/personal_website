// import Button from "@/components/common/button";
import { animateScroll as scroll, Link } from "react-scroll";
// import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { NavAnchor as Anchor } from "@/components/common";
import { NavItem } from "@/lib/types";

// const iconStyle = { width: "2rem", height: "2rem" };

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    anchorId: "home"
  },
  {
    label: "Projects",
    anchorId: "projects"
  },
  {
    label: "Work Experience",
    anchorId: "experience"
  },
  {
    label: "Education",
    anchorId: "education"
  }
];

const Navbar = ({
  currentTheme: _currentTheme,
  changeThemeFn: _changeThemeFn
}) => {
  return (
    <div className="bg-white text-black py-[1vh] w-full sticky top-0 z-10">
      <div className="px-52">
        <div className="flex justify-between items-center">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => scroll.scrollToTop()}
          >
            Giacomo Pasin
          </h1>
          <div className="flex items-center justify-between">
            {NAV_ITEMS.map(({ label, anchorId }) => (
              <Link to={anchorId} smooth spy key={anchorId} offset={-70}>
                <Anchor>{label}</Anchor>
              </Link>
            ))}
            {/*<Button
              circular
              border
              onClick={() => changeThemeFn(!currentTheme)}
            >
              {currentTheme ? (
                <SunIcon style={iconStyle} />
              ) : (
                <MoonIcon style={{ ...iconStyle, color: "white" }} />
              )}
            </Button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
