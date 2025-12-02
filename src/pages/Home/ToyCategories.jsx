import React from "react";
import { FaCarSide, FaRobot, FaPuzzlePiece, FaBaby, FaCubes, FaBook } from "react-icons/fa";

const ToyCategories = () => {
  const categories = [
    {
      name: "Building Blocks",
      icon: <FaCubes size={40} />,
      color: "bg-yellow-100",
    },
    {
      name: "Educational Toys",
      icon: <FaBook size={40} />,
      color: "bg-blue-100",
    },
    {
      name: "Soft Toys",
      icon: <FaBaby size={40} />,
      color: "bg-pink-200",
    },
    {
      name: "Vehicles",
      icon: <FaCarSide size={40} />,
      color: "bg-green-100",
    },
    {
      name: "Robotics",
      icon: <FaRobot size={40} />,
      color: "bg-purple-100",
    },
    {
      name: "Puzzles",
      icon: <FaPuzzlePiece size={40} />,
      color: "bg-orange-100",
    },
  ];

  return (
    <div className="my-12 px-3">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Toy Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="3000"
            className={`p-6 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-xl cursor-pointer ${category.color}`}
          >
            <div className="text-gray-700 mb-3">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCategories;
