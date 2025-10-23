import React, { use } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import userIcon from "../../assets/user.png";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const handleUserProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile(name, photoURL)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your name and photo have been updated successfully!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-3xl">
      <Helmet>
        <title>My Profile</title>
        <meta name="description" content="ToyTopia — local kids toy marketplace." />
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">
        My Profile
      </h2>

      <div className="flex flex-col items-center mb-8">
        <img
          src={user?.photoURL || { userIcon }}
          alt="User"
          className="w-24 h-24 rounded-full border-2 border-gray-400 mb-2"
        />
        <h3 className="text-xl font-semibold">
          {user?.displayName || "No Name"}
        </h3>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <div className="card w-full max-w-sm mx-auto shrink-0 border border-gray-300 rounded-3xl">
        <div className="card-body">
          <form onSubmit={handleUserProfile}>
            <fieldset className="fieldset relative">
              <h1 className="text-xl font-semibold text-center">
                Update Your Profile
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

              <button className="btn rounded-full bg-pink-500 text-white hover:bg-pink-600 mt-4">
                Save Changes
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
