import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700"
    >
      {/* logo and site name */}
      <div className="flex justify-between items-center">
        {/* I will add the image here later */}
        <img src="" alt="our logo" className="w-[50px]" />
        <Link to="/" className="font-bold text-3xl">
          WE CARE
        </Link>
      </div>

      {/* list of other tabs */}

      <ul className="flex gap-5 text-lg font-semibold text-white ml-5 sm:ml-0">
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">
          About
        </Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">
          Contact
        </Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2 bg-purple-700 text-white">
          DOCTOR
        </Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">
          Log In
        </Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">
          Sign Up
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;