import React from "react";
import useToys from "../../hooks/useToys";
import ToyCard from "./ToyCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";

const Toys = () => {
  const { toys, loading } = useToys();
  return (
    <div>
      <Helmet>
        <title>Toys | ToyTopia</title>
        <meta
          name="description"
          content="Browse the best local toys for your kids on ToyTopia."
        />
      </Helmet>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-pink-600">All Toys</h1>
      </div>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toys;
