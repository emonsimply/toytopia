import React from 'react';

const NewArrivals = () => {
    const newToys = [
    { id: 1, name: "Puzzle Cube", price: "$12", img: "/images/puzzle-cube.jpg" },
    { id: 2, name: "Teddy Bear", price: "$18", img: "/images/teddy-bear.jpg" },
    { id: 3, name: "Toy Car", price: "$15", img: "/images/toy-car.jpg" },
    { id: 4, name: "Building Blocks", price: "$20", img: "/images/blocks.jpg" },
  ];
  return (
     <section className="py-12 bg-yellow-100 rounded-3xl" data-aos="zoom-in-right"  data-aos-duration="3000">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {newToys.map(toy => (
          <div key={toy.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={toy.img} alt={toy.name} className="mx-auto mb-4 h-40 object-cover"/>
            <h3 className="font-semibold">{toy.name}</h3>
            <p className="text-green-600 font-bold">{toy.price}</p>
            <button className="mt-2 px-4 py-1 bg-pink-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;