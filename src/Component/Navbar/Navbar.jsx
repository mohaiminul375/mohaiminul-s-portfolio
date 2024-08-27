import { Slide } from "react-awesome-reveal";
import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";


const Navbar = () => {
  const navLins = (
    <>
      <Link className="text-white text-lg cursor-pointer" to="banner">
        Home
      </Link>

      <Link className="text-white text-lg cursor-pointer" to="about">
        About
      </Link>

      <Link className="text-white text-lg cursor-pointer" to="skills">
        Skills
      </Link>
      <Link className="text-white text-lg cursor-pointer" to="education">
        Education
      </Link>
      <Link className="text-white text-lg cursor-pointer" to="services">
        Services
      </Link>
      <Link className="text-white text-lg cursor-pointer" to="projects">
        Projects
      </Link>
      <Link className="text-white text-lg cursor-pointer" to="contact">
        Contact
      </Link>
      <RouterLink target="_blank" to='https://drive.google.com/file/d/11mQ_DQQSfmcs3btSdHhbPRCazmpuYnFJ/view' className="bg-[#55E6A5] px-3 rounded-md text-black py-1 font-medium flex items-center text-lg">
        Resume
      </RouterLink>
    </>
  );
  return (
    // <nav className=" flex items-center justify-between md:px-10">
    // <div>
    // <h2 className="text-3xl text-[#55E6A5] font-play_write">Mohaiminul Islam</h2>
    // </div>
    // </nav>
    <Slide
      className="fixed w-full z-10"
      triggerOnce="false"
      duration={2000}
      direction="down"
    >
      <div className="navbar h-16  bg-[#141C27] md:px-10">
        <div className="navbar-start">
          <h2 className="text-lg md:text-3xl text-[#55E6A5] font-play_write">
            Mohaiminul Islam
          </h2>
        </div>
        <div className="flex-1"></div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">{navLins}</ul>
        </div>
        {/* dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#141C27] rounded-box w-52"
          >
            {navLins}
          </ul>
        </div>
      </div>
    </Slide>
  );
};

export default Navbar;
