import React from "react";
import { Link } from "react-router";


const ToyCard = ({ toy }) => {
  const { _id, pictureURL, toyName, rating, availableQuantity, price } = toy;

  return (
    <div className="bg-white shadow-lg rounded-2xl hover:shadow-pink-300 transition-all duration-300">
      <div>
        <img
          src={pictureURL}
          alt={toyName}
          className="rounded-xl w-full h-48 object-cover"
        />
      </div>

      <div className="card-body text-center">
        <h2 className="text-xl font-bold">{toyName}</h2>
        <p className="text-gray-600">Rating: ⭐ {rating}</p>
        <p className="text-gray-600">Available: {availableQuantity}</p>
        <p className="text-lg font-semibold">Price: ${price}</p>

        
          <Link to={`/toy/${_id}`}>
            <button className="btn mt-2 bg-pink-500 hover:bg-pink-600 text-white">
              View More
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default ToyCard;
