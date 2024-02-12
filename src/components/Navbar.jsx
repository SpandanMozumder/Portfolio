import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "bg-orange-500 text-black px-5 py-2 rounded-2xl"
      : "";
  };

  return (
    <div>
      <nav className="w-screen font-sourcecode bg-black border-b-2 border-gray-600 flex justify-between fixed z-50">
        <Link
          to="/"
          className="text-white text-2xl px-5 py-5 hover:text-orange-500"
        >
          Spandan Mozumder
        </Link>
        <ul className="flex space-x-5 justify-center items-center text-white px-11">
          {navLinks.map((link) => (
            <li key={link.id}>
              <div className="px-5 py-2 rounded-2xl hover:bg-orange-500 hover:text-black">
                <Link to={link.path} className={`${isActive(link.path)}`}>
                  {link.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
