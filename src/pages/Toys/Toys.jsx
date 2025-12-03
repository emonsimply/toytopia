import React, { useState, useMemo } from "react";
import useToys from "../../hooks/useToys";
import ToyCard from "./ToyCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";

const Toys = () => {
  const { toys, loading } = useToys();
  const [sortOption, setSortOption] = useState("default");

  // Sort toys
  const sortedToys = useMemo(() => {
    if (sortOption === "lowToHigh") {
      return [...toys].sort((a, b) => a.price - b.price);
    }
    if (sortOption === "highToLow") {
      return [...toys].sort((a, b) => b.price - a.price);
    }
    return toys;
  }, [sortOption, toys]);

  return (
    <div className="mt-12">
      <Helmet>
        <title>Toys | ToyTopia</title>
        <meta
          name="description"
          content="Browse the best local toys on ToyTopia."
        />
      </Helmet>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-pink-600">All Toys</h1>
      </div>

      <div className="flex justify-end max-w-6xl mx-auto mb-4">
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered rounded-full px-4 py-2"
        >
          <option value="default">Sort By: Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 max-w-6xl mx-auto">
          {sortedToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Toys;
