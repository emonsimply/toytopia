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

      <div className="bg-linear-to-r from-pink-500 to-purple-500 flex flex-col items-center justify-center text-center px-5 py-10 rounded-3xl">
        <h1 className="text-4xl font-bold text-white mb-4">About ToyTopia</h1>
        <p className="max-w-2xl mb-6">
          Welcome to <span className="font-semibold text-white">ToyTopia</span> — 
          a vibrant and playful online marketplace for kids' toys! 
          Our goal is to bring joy to every child while helping parents discover 
          and support local toy makers and sellers.
        </p>

        <div className="max-w-3xl bg-white/20 p-8 rounded-3xl shadow-lg ">
          <h2 className="text-2xl font-semibold mb-3 text-white">Our Mission</h2>
          <p className="mb-5">
            We aim to make toy shopping fun, safe, and community-driven. 
            Every toy listed on ToyTopia is selected with love and care to 
            ensure quality, creativity, and joy for your little ones.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-white">Why Choose Us?</h2>
          <ul className="list-disc text-left mx-auto max-w-md space-y-2">
            <li>Support local toy creators and small businesses</li>
            <li>Explore unique, hand-crafted toys for every age</li>
            <li>Safe and secure user experience</li>
            <li>Easy login, wishlist, and personalized profiles</li>
          </ul>
        </div>

        <p className="text-white mt-10">
          ♥Thank you for being part of the ToyTopia family!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
