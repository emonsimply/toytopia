import React from "react";
import Slider from "./Slider";
import PopularToys from "./PopularToys";
import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import CustomerFeedback from "./CustomerFeedback";
import ToyCategories from "./ToyCategories";
import FAQs from "./FAQs";

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
      
      <ToyCategories></ToyCategories>

      <CustomerFeedback></CustomerFeedback>
      <FAQs></FAQs>
    </div>
  );
};

export default Home;
