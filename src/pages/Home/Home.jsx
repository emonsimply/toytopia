import React from "react";
import Slider from "./Slider";
import PopularToys from "./PopularToys";
import { Helmet } from "react-helmet";
import NewArrivals from "./NewArrivals";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | ToyTopia</title>
        <meta name="description" content="ToyTopia — local kids toy marketplace." />
      </Helmet>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <NewArrivals></NewArrivals>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
