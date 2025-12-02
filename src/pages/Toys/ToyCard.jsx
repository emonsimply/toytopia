import React from "react";
import { Link } from "react-router";


const ToyCard = ({ toy }) => {
  const { toyId, pictureURL, toyName, rating, availableQuantity, price } = toy;

  return (
    <div className=" rounded-2xl hover:shadow-pink-300  bg-white shadow-xl hover:scale-101 transition-transform duration-300">
      <div>
        <img
          src={pictureURL}
          alt={toyName}
          className="rounded-t-2xl w-full h-48 object-cover"
        />
      </div>

      <div className="card-body text-center">
        <h2 className="text-xl font-bold">{toyName}</h2>
        <p className="text-gray-600">Rating: ⭐ {rating}</p>
        <p className="text-gray-600">Available: {availableQuantity}</p>
        <p className="text-lg font-semibold">Price: ${price}</p>

        
          <Link to={`/toyDetails/${toyId}`}>
            <button className="btn w-full mt-2 rounded-full bg-primary hover:bg-pink-600 text-white">
              View More
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default ToyCard;
