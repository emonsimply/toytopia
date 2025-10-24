import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { singInUser, singInWithGoogle } = use(AuthContext);

  
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back to ToyTopia!",
          timer: 1800,
          showConfirmButton: false,
        });
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
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
        navigate(location.state || "/");
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
        <title>Login | ToyTopia</title>
        <meta name="description" content="Login to ToyTopia and explore local toy deals." />
      </Helmet>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">
              Login
            </h1>
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
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <Link to='/forget-password'>
              <a className="link link-hover">Forgot password?</a>
              </Link>
            </div>
            <button className="btn rounded-full bg-pink-500 text-white hover:bg-pink-600 mt-4">
              Login
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
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-pink-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
