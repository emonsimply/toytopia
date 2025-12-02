import React from "react";
import userLogo from "../../assets/user.png";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Rafi's Mom",
      img: "https://i.ibb.co/1LytmQz/mom1.jpg",
      comment: "Amazing quality toys! My kid loves the building blocks.",
    },
    {
      name: "Mim's Dad",
      img: "https://i.ibb.co/FWsX3LG/dad2.jpg",
      comment: "ToyTopia delivers fast and their service is wonderful!",
    },
    {
      name: "Samiha",
      img: "https://i.ibb.co/1nWtyhR/girl3.jpg",
      comment: "I loved the dolls I got! Super cute and safe.",
    },
    {
      name: "Rafi's Mom",
      img: "https://i.ibb.co/1LytmQz/mom1.jpg",
      comment: "Amazing quality toys! My kid loves the building blocks.",
    },
  ];

  return (
    <section className="bg-linear-to-r from-pink-100 to-primary rounded-3xl py-16">
      <div
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2 className="text-4xl font-bold text-white">
          What Our Customers Say
        </h2>
        <p className="text-white mt-2">Happy families, happy smiles!</p>
      </div>

      <div
        className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {feedbacks.map((f, i) => (
          <div
            key={i}
            className="card bg-white/40 shadow-xl hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="card-body items-center text-center">
              <img
                src={userLogo}
                alt={f.name}
                className="w-12 h-12 rounded-full border border-gray-400 mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{f.name}</h3>
              <p className="text-gray-600 italic mt-2">"{f.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
