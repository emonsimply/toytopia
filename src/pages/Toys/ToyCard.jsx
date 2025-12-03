import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {
    toyId,
    pictureURL,
    toyName,
    rating,
    availableQuantity,
    price,
    discountPercentage,
  } = toy;

  return (
    <div className="bg-white shadow-xl rounded-2xl hover:shadow-pink-300 hover:scale-[1.02] transition-all duration-300 flex flex-col">
      <img
        src={pictureURL}
        alt={toyName}
        className="rounded-t-2xl w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="card-body flex flex-col flex-grow p-3">
        <h2 className="text-lg font-bold line-clamp-2 ">{toyName}</h2>

       

        <div className="flex-grow"></div>
        <div className="flex justify-between items-center text-gray-600">
          <p>⭐ {rating}</p>
          <p>Available: {availableQuantity}</p>
        </div>

        <p className="font-bold text-primary">
          ${price}
          {discountPercentage > 0 && (
            <span className="ml-2 text-sm text-green-600 font-semibold">
              -{discountPercentage}% Off
            </span>
          )}
        </p>

        <Link to={`/toyDetails/${toyId}`}>
          <button className="btn w-full rounded-full bg-primary hover:bg-pink-600 text-white">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
