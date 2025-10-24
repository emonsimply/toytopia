import React from "react";
import useToys from "../../hooks/useToys";
import { Link } from "react-router";
import ToyCard from "../Toys/ToyCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PopularToys = () => {
  const { toys, loading } = useToys();
  
  return (
    <div className="flex flex-col items-center my-16" data-aos="zoom-in-left"  data-aos-duration="3000">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-pink-600">Popular Toys</h1>
      </div>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {toys.slice(0, 4).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      )}

      <Link to="/toys" className="px-8 bg-linear-to-r btn from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:bg-linear-to-l hover:shadow-md">
        Show All
      </Link>
    </div>
  );
};

export default PopularToys;
