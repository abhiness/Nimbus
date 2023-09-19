import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../../images/Logo/HeaderLogo.svg";
import HamburgerIcon from "../../images/icons/silver.png"; // Replace with your icon's path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav bg-slate-800 h-35 flex justify-between items-center relative z-10">
      <Link to="/" className="site-title">
        <img src={Logo} className="h-65 w-60" alt="Logo" />
      </Link>

      {/* Hamburger icon for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? (
            // Close icon (you can replace with your custom icon)
            <img
              src={HamburgerIcon}
              alt="Close"
              className="w-8 h-8 transform rotate-180"
            />
          ) : (
            // Hamburger icon (you can replace with your custom icon)
            <img src={HamburgerIcon} alt="Menu" className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Menu for medium and large screens */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 pl-4 mx-auto max-w-lfont-xanh-mono md:space-x-8 md:pl-4 transition-all duration-300 absolute top-full right-0 bg-slate-800 md:static md:bg-transparent md:flex-row font-xanh-mono`}
      >
        <CustomLink
          className="text-white text-2xl font-normal font-['Istok Web'] hover:text-orange-300"
          to="/home"
        >
          Home
        </CustomLink>
        <CustomLink
          className="text-white text-2xl font-normal font-['Istok Web'] hover:text-orange-300"
          to="/about"
        >
          About Us
        </CustomLink>
        <CustomLink
          className="text-white text-2xl font-normal font-['Istok Web'] hover:text-orange-300"
          to="/menu"
        >
          Menu
        </CustomLink>
        <CustomLink
          className="text-white text-2xl font-normal font-['Istok Web'] hover:text-orange-300"
          to="/catering"
        >
          Catering
        </CustomLink>
        <CustomLink
          className="text-white text-2xl font-normal font-['Istok Web'] hover:text-orange-300"
          to="/contact"
        >
          Contact Us
        </CustomLink>
        <CustomLink
          className="ml-6 text-white text-2xl font-normal font-['Istok Web'] bg-orange-400 rounded-full p-4 transition-all duration-300 hover:text-orange-400 hover:bg-white"
          to="/reservation"
        >
          Reservation
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
