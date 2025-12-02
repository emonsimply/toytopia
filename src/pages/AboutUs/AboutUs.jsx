import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | ToyTopia</title>
        <meta
          name="description"
          content="Learn more about ToyTopia — your trusted local kids' toy marketplace."
        />
      </Helmet>

      <div className="bg-white flex flex-col items-center justify-center text-center px-5 py-10 rounded-3xl mt-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About ToyTopia
        </h1>

        <p className="max-w-2xl mb-6 text-gray-700">
          Welcome to{" "}
          <span className="font-semibold text-secondary">ToyTopia</span> — 
          a vibrant and playful online marketplace for kids' toys!
          Our goal is to bring joy to every child while helping parents discover 
          and support local toy makers and sellers.
        </p>

        <div className="max-w-3xl bg-secondary/20 shadow-xl p-8 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Our Mission
          </h2>
          <p className="mb-5 text-gray-700">
            We aim to make toy shopping fun, safe, and community-driven. 
            Every toy listed on ToyTopia is selected with love and care to 
            ensure quality, creativity, and joy for your little ones.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Why Choose Us?
          </h2>
          <ul className="list-disc text-left mx-auto max-w-md space-y-2 text-gray-700">
            <li>Support local toy creators and small businesses</li>
            <li>Explore unique, hand-crafted toys for every age</li>
            <li>Safe and secure user experience</li>
            <li>Easy login, wishlist, and personalized profiles</li>
          </ul>
        </div>

        <p className="text-secondary mt-10 font-semibold">
          ♥ Thank you for being part of the ToyTopia family!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
