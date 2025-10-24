import React from "react";
import Slider from "./Slider";
import PopularToys from "./PopularToys";
import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import CustomerFeedback from "./CustomerFeedback";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | ToyTopia</title>
        <meta
          name="description"
          content="ToyTopia — local kids toy marketplace."
        />
      </Helmet>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <WhyChooseUs></WhyChooseUs>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default Home;
