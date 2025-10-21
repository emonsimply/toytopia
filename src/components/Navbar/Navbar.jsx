import React from "react";
import { NavLink, Link } from "react-router";
import './Navbar.css'

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="my-profile">My Profile</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm rounded-full">
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
        <a className="btn btn-ghost text-xl font-bold text-primary">ToyTopia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">{navItems}</ul>
      </div>
      <div className="navbar-end mr-2">
        <Link
          to="/login"
          className="btn bg-primary text-white font-bold rounded-full "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
