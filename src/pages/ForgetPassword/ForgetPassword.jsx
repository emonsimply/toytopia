import React, { use, useRef } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const { passwordReset } = use(AuthContext);
  const emailRef = useRef(null);

  const handlePassword = () => {
    const email = emailRef.current.value;
    passwordReset(email)
    .then(() => {
        Swal.fire({
          title: "Password Reset Email Sent!",
          text: "Check your Gmail inbox or spam folder.",
          icon: "success",
          confirmButtonText: "Open Gmail"
        }).then(() => {
          window.location.href = "https://mail.google.com/";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="card bg-white w-full max-w-sm mx-auto shrink-0 shadow-lg rounded-3xl mt-12">
      <Helmet>
        <title>Reset Password | ToyTopia</title>
        <meta name="description" content="Reset your ToyTopia account password securely." />
      </Helmet>
      <div className="card-body">
        <fieldset className="fieldset">
          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Reset Password
          </h1>
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
          />
          <button
            onClick={handlePassword}
            className="btn rounded-full bg-primary text-white hover:bg-pink-600 mt-4"
          >
            Reset Password
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default ForgetPassword;
