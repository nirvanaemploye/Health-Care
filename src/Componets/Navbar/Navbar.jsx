import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const NavbarData = [
  { id: 1, title: "Home", url: "#" },
  { id: 2, title: "About Us", url: "#" },
  { id: 3, title: "Services", url: "#" },
  { id: 4, title: "Pages", url: "#" },
  { id: 5, title: "Blog", url: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav data-aos="fade" className="z-10 container flex justify-between items-center px-8 py-6 bg-transparent text-white relative">
        <h1 className="text-2xl font-bold text-white">
          Health<span className="text-secondary">Care</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-16">
          {NavbarData.map((item) => (
            <li key={item.id} className="hover:font-bold hover:scale-110 duration-300 translation">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="hidden lg:block bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-md">
          Contact Us
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaXmark size={28} /> : <IoMenu size={28} />}
        </div>

        {/* Mobile Menu with Animation */}
        <ul
          className={`absolute top-20 left-0 w-full bg-primary text-white flex flex-col items-center space-y-6 py-6 lg:hidden transform transition-all duration-500 ease-in-out ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          {NavbarData.map((item) => (
            <li key={item.id} onClick={() => setMenuOpen(false)}>
              <a href={item.url} className="text-lg">{item.title}</a>
            </li>
          ))}
          <li>
            <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-md">
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
