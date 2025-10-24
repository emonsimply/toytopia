import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      img: "https://media.istockphoto.com/id/2153019218/photo/weekend-activities-playing-with-toy-plane-happy-father-with-son-are-having-fun-on-the-field.jpg?s=612x612&w=0&k=20&c=Ex6g6j7dWfxiuC04VHlBIIs6-grOmmvBVYt6eDnoWj4=",
      title: "Discover the Joy of Playtime",
      desc: "Find colorful and creative toys for your little ones at ToyTopia!",
    },
    {
      img: "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/01/outdoor-toys.jpg",
      title: "Build, Imagine, and Create",
      desc: "Explore building blocks, puzzles, and brain-boosting fun!",
    },
    {
      img: "https://childrensclinicga.com/wp-content/uploads/2024/05/shutterstock_717236839-e1716404566780.jpg",
      title: "Gifts that Spark Smiles",
      desc: "Safe, fun, and high-quality toys for every kid’s imagination!",
    },
  ];

  return (
    <section className="mt-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl shadow-xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              <div className="relative z-10 text-white px-6 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">{slide.desc}</p>
                <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
