import React from "react";
import { useParams } from "react-router";
import useToys from "../../hooks/useToys";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ToyDetails = () => {
  const { toys, loading } = useToys();
  const { id } = useParams();

  const singleToy = toys?.find((toy) => toy.toyId == parseInt(id));

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

  if (loading) return <LoadingSpinner />;

  if (!singleToy)
    return (
      <div className="text-center py-20 text-gray-500 text-xl font-semibold">
        Toy not found!
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>{singleToy.toyName} | ToyTopia</title>
        <meta
          name="description"
          content={`Details, specifications and info about ${singleToy.toyName}.`}
        />
      </Helmet>

      <div className="max-w-5xl mx-auto my-12 p-6 bg-white shadow-lg rounded-3xl">
        
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            className="w-full md:w-1/2 rounded-xl"
            src={singleToy.pictureURL}
            alt={singleToy.toyName}
          />

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">{singleToy.toyName}</h2>
            <p className="text-lg text-gray-600 mb-3">
              <span className="font-semibold">Brand:</span> {singleToy.brand}
            </p>

            <p className="text-2xl font-bold text-primary mb-2">
              ${singleToy.price}
              {singleToy.discountPercentage > 0 && (
                <span className="ml-2 text-sm text-green-600 font-semibold">
                  -{singleToy.discountPercentage}% Off
                </span>
              )}
            </p>

            <p className="text-gray-700 mb-2">
              ⭐ <span className="font-semibold">{singleToy.rating}</span>/5
            </p>

            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Available:</span>{" "}
              {singleToy.availableQuantity} pcs
            </p>

            <p className="text-gray-600 leading-7">
              {singleToy.description}
            </p>
          </div>
        </div>

        <hr className="my-8 opacity-30" />

        {/* Specifications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Specifications</h3>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-semibold">Sub Category:</span> {singleToy.subCategory}</p>
            <p><span className="font-semibold">Age Group:</span> {singleToy.ageGroup}</p>
            <p><span className="font-semibold">Material:</span> {singleToy.material}</p>
            <p><span className="font-semibold">Color:</span> {singleToy.color}</p>
            <p><span className="font-semibold">Weight:</span> {singleToy.weight}</p>
            <p><span className="font-semibold">Dimensions:</span> {singleToy.dimensions}</p>
            <p><span className="font-semibold">Warranty:</span> {singleToy.warranty}</p>
            <p><span className="font-semibold">Shipping Fee:</span> ${singleToy.shippingFee}</p>
            <p><span className="font-semibold">Country of Origin:</span> {singleToy.countryOfOrigin}</p>
            <p><span className="font-semibold">Stocked Date:</span> {singleToy.inStockDate}</p>
          </div>
        </div>

        <hr className="my-8 opacity-30" />

        {/*Try Now Form*/}
        <div className="card w-full max-w-80 mx-auto flex flex-col">
          <h3 className="text-2xl font-bold text-center text-primary mb-4">
            Try Now
          </h3>

          <div className="card-body p-0">
            <form onSubmit={handleTryNow}>
              <fieldset className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  className="input input-bordered rounded-full"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  required
                  className="input input-bordered rounded-full"
                  placeholder="Your Email"
                />
                <button
                  className="btn w-full bg-primary hover:bg-pink-600 text-white font-bold mt-2 rounded-full"
                >
                  Try Now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;