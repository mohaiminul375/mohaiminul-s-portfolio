import { Slide } from "react-awesome-reveal";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLins = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="#projects">Project</NavLink>
    </>
  );
  return (
    // <nav className=" flex items-center justify-between md:px-10">
    // <div>
    // <h2 className="text-3xl text-[#55E6A5] font-play_write">Mohaiminul Islam</h2>
    // </div>
    // </nav>
    <Slide
      className="fixed w-full"
      triggerOnce="false"
      duration={2000}
      direction="down"
    >
      <div className="navbar h-16  bg-[#141C27] md:px-10 z-10">
        <div className="navbar-start">
          <h2 className="text-3xl text-[#55E6A5] font-play_write">
            Mohaiminul Islam
          </h2>
        </div>
        <div className="flex-1"></div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLins}</ul>
        </div>
        {/* dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {navLins}
          </ul>
        </div>
      </div>
    </Slide>
  );
};

export default Navbar;
