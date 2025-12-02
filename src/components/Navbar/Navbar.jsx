import React, { use } from "react";
import { NavLink, Link } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Swal from "sweetalert2";
import userLogo from "../../assets/user.png";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";
import { FiLogOut } from "react-icons/fi";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { SignOut, user, loading } = use(AuthContext);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const navItems = (
    <>
      <li>
        <NavLink to="/">
         Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/toys">Toys</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="my-profile">My Profile</NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F379A7",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        SignOut()
          .then(() => {
            Swal.fire("Logged out!", "You have been logged out.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent mt-2 px-4">
      <div className="navbar bg-white shadow-sm rounded-full max-w-7xl mx-auto px-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <p className="ml-2"><Logo></Logo></p>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600">
            {navItems}
          </ul>
        </div>

        {user ? (
          <div className="navbar-end mr-2">
            <div className="relative group mr-3">
              <img
                src={user.photoURL || { userLogo }}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-400 cursor-pointer"
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-pink-100 text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-md">
                {user.displayName || "No Name"}
              </span>
            </div>

            <button
              onClick={handleSignOut}
              className="bg-linear-to-r btn from-primary to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:bg-linear-to-l hover:shadow-md"
            >
              <FiLogOut />LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end mr-2">
            <Link
              to="/login"
              className="bg-linear-to-r btn from-primary to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:bg-linear-to-l hover:shadow-md"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
