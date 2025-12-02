import React from "react";
import { useParams } from "react-router";
import useToys from "../../hooks/useToys";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ToyDetails = () => {
  const { toys, loading } = useToys();
  const { id } = useParams();

  const singleToy = toys.find((toy) => toy.toyId == parseInt(id));

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "You have successfully tried this toy!",
      icon: "success",
      confirmButtonColor: "#F379A7",
    });
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>Toy Details | ToyTopia</title>{" "}
        <meta
          name="description"
          content="Detailed information about your favorite toy on ToyTopia."
        />{" "}
      </Helmet>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              className="w-full md:w-1/2"
              src={singleToy.pictureURL}
              alt=""
            />

            <div>
              <h2 className="text-3xl font-bold mb-3">{singleToy.toyName}</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Price:</span> ${singleToy.price}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Rating:</span> ⭐{" "}
                {singleToy.rating}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Available Quantity:</span>{" "}
                {singleToy.availableQuantity}
              </p>
              <p className="text-gray-700">{singleToy.description}</p>
            </div>
          </div>

          <hr className="opacity-10 my-6" />
          {/* form */}
          <div className="card w-full mx-auto max-w-sm shrink-0">
            <h3 className="text-2xl text-center font-bold text-primary">
              Try Now
            </h3>
            <div className="card-body">
              <form onSubmit={handleTryNow}>
                <fieldset className="fieldset">
                  <input
                    type="text"
                    required
                    className="input"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    required
                    className="input"
                    placeholder="Your Email"
                  />
                  <button className="btn w-full mx-auto bg-primary hover:bg-pink-600 text-white font-bold  mt-4 rounded-full">
                    Try Now
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToyDetails;
