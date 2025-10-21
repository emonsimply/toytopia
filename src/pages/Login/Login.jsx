import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-white w-full max-w-sm mx-auto shrink-0 shadow-lg rounded-3xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">Login</h1>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn rounded-full bg-pink-500 text-white hover:bg-pink-600 mt-4">Login</button>
          <div className="divider">OR</div>
          <button className="btn rounded-full bg-gray-100">
            <FcGoogle />
            Login with Google
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-pink-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
