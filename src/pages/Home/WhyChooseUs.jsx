import { FaGift, FaShieldAlt, FaSmile } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaTruckFast className="text-4xl text-yellow-500" />,
      title: "Fast Delivery",
      desc: "We ensure your toys reach your kids quickly and safely.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Safe & Secure",
      desc: "All toys are verified for safety and quality.",
    },
    {
      icon: <FaSmile className="text-4xl text-blue-500" />,
      title: "Happy Kids, Happy Parents",
      desc: "Thousands of parents trust ToyTopia for joyful memories.",
    },
    {
      icon: <FaGift className="text-4xl text-green-500" />,
      title: "Exciting Offers",
      desc: "Special discounts and gifts for our loyal customers.",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-l from-pink-100 to-primary rounded-3xl">
      <div className="text-center mb-10" data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className="text-4xl font-bold text-white">Why Choose ToyTopia?</h2>
        <p className="text-white mt-2">
          Discover why families love shopping with us!
        </p>
      </div>

      <div className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto " data-aos="fade-up"
     data-aos-duration="3000">
        {features.map((item, idx) => (
          <div key={idx} className="card bg-white/40 shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="card-body items-center text-center">
              {item.icon}
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
