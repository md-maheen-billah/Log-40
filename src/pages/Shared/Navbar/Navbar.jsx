import { Link } from "react-router-dom";
import icon from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Career</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-[#706F6F]">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img className="w-[45px] mr-2" src={icon} alt="" />
            <button
              onClick={handleSignOut}
              className="btn rounded-none text-xl bg-[#403F3F] text-white px-11"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <img className="w-[45px] mr-2" src={icon} alt="" />
            <Link to="/login">
              <button className="btn rounded-none text-xl bg-[#403F3F] text-white px-11">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
