import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, singInWithGoogle, updateUserProfile } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  //Password validation rules
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Password must have at least one uppercase letter!";
    } else if (!/[a-z]/.test(password)) {
      return "Password must have at least one lowercase letter!";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long!";
    }
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: passwordError,
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Welcome to ToyTopia!",
            });
          })
          .catch(() => {});
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          text: `Welcome ${result.user.displayName}`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="card bg-white w-full max-w-sm mx-auto shrink-0 shadow-lg rounded-3xl">
      <Helmet>
        <title>Register | ToyTopia</title>
        <meta name="description" content="Create your ToyTopia account to start exploring toys." />
      </Helmet>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset relative">
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">
              Register
            </h1>
            <label className="label">Name</label>
            <input
              name="name"
              type="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
            />
            <span
              className="absolute right-8 top-79 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </span>

            <button className="btn rounded-full bg-pink-500 text-white hover:bg-pink-600 mt-4">
              Register
            </button>
            <div className="divider">OR</div>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn rounded-full bg-gray-100"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
